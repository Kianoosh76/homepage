const request = require("supertest");

const BASE_URL = `http://localhost:${process.env.PORT || 3000}`;

describe("API Tests for Authors and Books", () => {
  let authorId;
  let bookId;
  const isbn =
    "isbn-" +
    Math.round(Math.random() * 10000).toString() +
    Math.round(Math.random() * 10000).toString();

  describe("Task 2: Author and book creation", () => {
    it("should create a new author", async () => {
      const response = await request(BASE_URL).post("/api/authors").send({
        firstName: "John",
        lastName: "Doe",
        bio: "A prolific author.",
      });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("id");
      expect(response.body.firstName).toBe("John");
      expect(response.body.lastName).toBe("Doe");

      authorId = response.body.id; // Save the author ID for future tests
    });

    it("should create a new book for an existing author", async () => {
      const response = await request(BASE_URL).post("/api/books").send({
        title: "JavaScript Basics",
        isbn,
        publishedDate: "2024-01-01T00:00:00.000Z",
        available: true,
        authorId: authorId, // Use the author ID from the previous test
      });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("id");
      expect(response.body.title).toBe("JavaScript Basics");
      expect(response.body.authorId).toBe(authorId);

      bookId = response.body.id; // Save the book ID for future tests
    });

    it("should fail to create a book with a non-existent authorId", async () => {
      const response = await request(BASE_URL).post("/api/books").send({
        title: "Invalid Author Book",
        isbn: "999-9999999999",
        publishedDate: "2024-01-01T00:00:00.000Z",
        available: true,
        authorId: 99999, // Assuming this authorId does not exist
      });

      expect(response.status).toBe(400); // Assuming your API returns 400 for invalid authorId
    });
  });

  describe("Task 3: Retrieval APIs", () => {
    it("should retrieve all authors", async () => {
      const response = await request(BASE_URL).get("/api/authors");

      expect(response.status).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0]).toHaveProperty("firstName");
      expect(response.body[0]).toHaveProperty("lastName");
    });

    it("should retrieve authors filtered by firstName", async () => {
      const response = await request(BASE_URL).get(
        "/api/authors?firstName=John"
      );

      expect(response.status).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0].firstName).toBe("John");
    });

    it("should retrieve books filtered by title", async () => {
      const response = await request(BASE_URL).get(
        "/api/books?title=JavaScript"
      );

      expect(response.status).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0].title).toContain("JavaScript");
    });

    it("should retrieve books, filtered by authorId", async () => {
      const responseAllBooks = await request(BASE_URL).get("/api/books");
      expect(responseAllBooks.status).toBe(200);
      expect(responseAllBooks.body.length).toBeGreaterThan(0);

      const responseFilteredBooks = await request(BASE_URL).get(
        `/api/books?authorId=${authorId}`
      );
      expect(responseFilteredBooks.status).toBe(200);
      expect(responseFilteredBooks.body.length).toBeGreaterThan(0);
      expect(responseFilteredBooks.body[0].authorId).toBe(authorId);
    });
  });

  describe("Task 4: Updating books and authors", () => {
    it("should update an existing author", async () => {
      const response = await request(BASE_URL)
        .put(`/api/authors/${authorId}`)
        .send({
          firstName: "Jane",
          bio: "Updated bio",
        });

      expect(response.status).toBe(200);
      expect(response.body.firstName).toBe("Jane");
      expect(response.body.bio).toBe("Updated bio");
    });

    it("should update an author with partial data", async () => {
      const response = await request(BASE_URL)
        .put(`/api/authors/${authorId}`)
        .send({});

      expect(response.status).toBe(200);
      expect(response.body.firstName).toBe("Jane");
    });

    it("should update an existing book", async () => {
      const response = await request(BASE_URL)
        .put(`/api/books/${bookId}`)
        .send({
          title: "Advanced JavaScript",
          available: false,
        });

      expect(response.status).toBe(200);
      expect(response.body.title).toBe("Advanced JavaScript");
      expect(response.body.available).toBe(false);
    });

    it("should fail to update a book with a duplicate ISBN", async () => {
      const newIsbn =
        "isbn-" +
        Math.round(Math.random() * 10000).toString() +
        Math.round(Math.random() * 10000).toString();

      // First, create another book
      const anotherBookResponse = await request(BASE_URL)
        .post("/api/books")
        .send({
          title: "Another Book",
          isbn: newIsbn,
          publishedDate: "2024-01-01T00:00:00.000Z",
          available: true,
          authorId: authorId,
        });

      expect(anotherBookResponse.status).toBe(201);

      // Attempt to update the first book's ISBN to the same as the second book
      const response = await request(BASE_URL)
        .put(`/api/books/${bookId}`)
        .send({
          isbn: newIsbn, // Duplicate ISBN
        });

      expect(response.status).toBe(400); // Assuming your API returns 400 for duplicate ISBN
    });
  });

  describe("Task 5: Delete APIs", () => {
    it("should delete an author and ensure all their books are also deleted", async () => {
      // Delete the author
      const deleteAuthorResponse = await request(BASE_URL).delete(
        `/api/authors/${authorId}`
      );

      expect(deleteAuthorResponse.status).toBe(200);
      expect(deleteAuthorResponse.body.message).toBe(
        "Author and their books deleted successfully"
      );

      // Attempt to retrieve the book (should fail or return empty)
      const response = await request(BASE_URL).get(
        `/api/books?authorId=${authorId}`
      );
      expect(response.body.length).toBe(0);
    });
  });
});
