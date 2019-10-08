#include <stdio.h>
#include <math.h>
#include <pthread.h>
#include <stdlib.h>

#define PI (float)3.14159265359
int N = 100000000;

typedef struct {
	int M; 
	int X;
} calc_arg_t;

pthread_mutex_t lock;
float SUM;

void *calc(void *arg){
	int M = ((calc_arg_t*) arg)->M;
	int X = ((calc_arg_t*) arg)->X;

	float sum = 0;
	for (int i=N/M * X; i < N/M * (X + 1) + (X == M-1) * (N % M); i++){
		sum += cos((i+1) * PI * 1.238324) * sin((i+ 3.482) * PI * PI);
	}
	
	pthread_mutex_lock(&lock);
	SUM += sum;
	pthread_mutex_unlock(&lock);

	return NULL;
}

#define MAX_THREADS 2000
pthread_t threads[MAX_THREADS];
calc_arg_t args[MAX_THREADS];

int main(int argc, char **argv){
//	printf("%f\n", calc());
	int M = atoi(argv[1]);

	if (M > MAX_THREADS){
		exit(1);
	}

	for (int i=0; i<M; i++){
		args[i].M = M;
	   	args[i].X = i;

		pthread_create(&threads[i], NULL, &calc, (void *)&args[i]);
	}
	
	for (int i=0; i<M; i++){
		pthread_join(threads[i], NULL);
	}

	printf("%f\n", SUM);	
}
