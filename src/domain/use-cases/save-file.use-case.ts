import * as fs from "fs";

export interface SaveFileUseCase {
  execute: (options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
  fileContent: string;
  fileDestination: string;
  fileName: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() /**
   * repository: StorageRepository
   */
  {}

  execute({
    fileContent,
    fileDestination,
    fileName,
  }: SaveFileOptions): boolean {

    try {
        fs.mkdirSync(fileDestination, { recursive: true });
        fs.writeFileSync(`${fileDestination}/${fileName}`, fileContent);
        console.log('File Created!');
        return true;
    } catch (error) {
        console.error(`Archivo no creado, error: ${error}`);
        return false;
    }
  }
}
