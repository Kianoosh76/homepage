#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int strlen2(const char *s){
        int len = 0;
        while (*s)
                s++, len++;
        return len;
}

// turn lowercase letters to uppercase
void to_upper(char *str){
        int len = strlen(str);
        for (int i=0; i<len; i++){
                if ('a' <= *(str + i) && str[i] <= 'z')
                        str[i] += 'A' - 'a';
        }
}

// split a string by words -> print all words
void split(const char *sen, char delimit){
        char prev = delimit;
        while (*sen){
                //              printf("+++%d %c\n+++", *sen);
                if (*sen == delimit){
                        if (prev != delimit)
                                printf("\n");
                }
                else
                        printf("%c", *sen);
                prev = *sen;
                sen++;
        }
}

//split the sen by del -> return an array of strings
//copy the original string
// word1 word2 word3
//             ^     ^
//                  ^
// "   "
//     ^
//    ^
const char **split2(const char *sen, char del, int *n){
        // not allowed *sen = 1;
        // alowed sen++;

        // calculate the number of words and replace 100 with that
        char **out = malloc(100 * sizeof(char *));
        int index = 0;
        while (*sen){
                const char *occ = strchr(sen, del);

                if (occ == NULL)
                        occ = sen + strlen(sen);

                if (occ == sen){
                        sen++;
                        continue;
                }

                char *tmp = malloc((occ - sen + 1) * sizeof(char));
                strncpy(tmp, sen, occ - sen);
                tmp[occ - sen] = 0;
                out[index++] = tmp;
                if (*occ == '\0')
                        break;
                sen = occ + 1;
        }
        *n = index;
        return (const char **)out;
}

int main(){
        size_t n = 100;
        char *sen = malloc(n);
        getline(&sen, &n, stdin);
        sen[strlen(sen)-1] = 0;

        //printf("%d %s\n", n, sen);
        int words_count = 0;
        const char **words = split2(sen, ' ', &words_count);
        for (int i=0; i<words_count; i++)
                printf("%s\n", words[i]);
        return 0;

        char a[] = {'h', 'e', 'l', 'l', 'o'};
        char b[] = "hell12378XHHHo";
        to_upper(b);

        printf("%s\n", b);

        char zero = '0';
        char null = '\0';
        //printf("%d %d\n", zero, null);

        printf("sizeof char array: %d\n", (int)sizeof(a));
        printf("sizeof char string: %d\n", (int)sizeof(b));

        printf("length of string: %lu\n", strlen(b));
}