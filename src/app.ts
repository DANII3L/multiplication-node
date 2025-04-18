import { yarg } from "./config/plugins/args.plugin";
import { serverApp } from "./presentation/server-app";

//console.log(process.argv)

//console.log(yarg.b)

// Esto es una función auto invocada, se aplica por los parentesis en los cuales se encuentra envuelto
(async () => {
  await main();
})();

async function main() {
  const { b: base, l: limit, s: show, n: fileName, d: fileDestination } = yarg;
  console.log(yarg)
  serverApp.run({ base, limit, show, fileName, fileDestination });
}
