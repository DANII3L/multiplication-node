import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface runOptions {
  base: number;
  limit: number;
  show: boolean;
  fileName: string;
  fileDestination: string;
}

export class serverApp {
  static run({ base, limit, show, fileName, fileDestination }: runOptions) {
    console.log("Server runing...");

    const table = new CreateTable().execute({ base, limit });
    console.log(fileDestination)
    const wasCreated = new SaveFile().execute({ fileContent: table, fileDestination: fileDestination, fileName: fileName });

    if (show) console.log(table);
  }
}
