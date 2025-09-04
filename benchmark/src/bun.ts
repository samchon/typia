import "reflect-metadata";

import { BenchmarkServer } from "./internal/BenchmarkServer";
import { BenchmarkReporter } from "./internal/BenchmarktReporter";
import { BenchmarkStream } from "./internal/BenhmarkStream";

async function main(): Promise<void> {
  const stream: BenchmarkStream = await BenchmarkReporter.initialize({
    directory: (str) => `${str}/bun`,
    platform: "Bun.JS",
  });
  for (const category of [
    "is",
    "assert",
    "validate",
    "assert-error",
    "validate-error",
    "optimizer",
    "stringify",
  ])
    await BenchmarkReporter.write(stream)(
      await BenchmarkServer.measure(category),
    );
  await BenchmarkReporter.terminate(stream);
}
main().catch((exp) => {
  console.log(exp);
  process.exit(1);
});
