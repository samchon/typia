import fs from "fs";

const EXTENSION = __filename.substr(-2);
if (EXTENSION === "js") require("source-map-support").install();

interface IModule {
  main(): Promise<string>;
}
const EXPORT_PATH: string = __dirname + "/../assets/benchmarks";

async function benchmark(feature: string): Promise<void> {
  //----
  // MAIN PROCESS
  //----
  // LAZY CONSTRUCTION OF THE TARGET MODULE
  const instance: IModule = await import(`${__dirname}/${feature}`);
  let time: number = Date.now();

  // CONTENT FROM THE SPEICAL MODULE
  let content: string = await instance.main();
  time = Date.now() - time;

  //----
  // REPORT MEMORY USAGE
  //----
  const memory: NodeJS.MemoryUsage = global.process.memoryUsage();
  let performance: string =
    "> ## Performance \n" + `>  - Elapsed time: ${time} ms\n`;

  for (const key in memory) {
    const amount: number = memory[key as keyof NodeJS.MemoryUsage] / 10 ** 6;
    performance += `>  - ${key}: ${amount} MB\n`;
  }
  content = performance + "\n\n" + content;

  //----
  // DO ARCHIVE
  //----
  await fs.promises.writeFile(`${EXPORT_PATH}/${feature}.md`, content, "utf8");
}

async function main(): Promise<void> {
  try {
    await fs.promises.mkdir(EXPORT_PATH);
  } catch {}

  if (process.argv[2]) {
    // SPECIFIED FEATURE EXISTS
    await benchmark(process.argv[2]);
  } else {
    // ITERATE ALL FEATURES
    const directory: string[] = await fs.promises.readdir(__dirname);
    for (const file of directory) {
      if (file.substr(-3) !== ".js" || file === "index.js") continue;

      await benchmark(file.substr(0, file.length - 3));
    }
  }
}
main();
