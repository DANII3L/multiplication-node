export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor
  /*
   * DI - Dependency Injection
   */() {}

  execute({ base, limit = 10 }: CreateTableOptions) {
    let output = `=================== \n TABLA DEL ${base} \n===================\n`;
    for (let i = 1; i <= limit; i++) {
      output += `${base} x ${i} = ${base * i}\n`;
    }

    return output;
  }
}
