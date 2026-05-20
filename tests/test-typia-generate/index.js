/**
 * Verifies that `typia generate` transforms its input deterministically.
 *
 * Pins two regressions: (1) `typia generate` discarding the transform
 * result and copying the input file verbatim into the output, and (2)
 * non-deterministic emit order caused by unsorted Go map iteration in the
 * native programmers. Every `src/input/generate_*.ts` fixture contains
 * `typia.*<T>()` call sites, so a correct output is never byte-identical
 * to its input and never changes between two generator runs.
 *
 * 1. Run `pnpm run generate` then `pnpm run build` (the `start` script).
 * 2. Assert each output differs from its input file (it was transformed).
 * 3. Re-run the generator and assert every output is byte-identical.
 */
const cp = require("child_process");
const fs = require("fs");

const inputDir = `${__dirname}/src/input`;
const outputDir = `${__dirname}/src/output`;
const repeatDir = `${__dirname}/src/output-repeat`;

const main = () => {
  const files = fs
    .readdirSync(inputDir)
    .filter((file) => file.endsWith(".ts"));
  let failed = false;

  // (1) every output must be transformed, not a verbatim copy of its input
  for (const file of files) {
    const outputPath = `${outputDir}/${file}`;
    if (fs.existsSync(outputPath) === false) {
      console.error(`Bug on ${file}: output file was not generated.`);
      failed = true;
      continue;
    }
    const input = fs.readFileSync(`${inputDir}/${file}`, "utf8");
    if (fs.readFileSync(outputPath, "utf8") === input) {
      console.error(
        `Bug on ${file}: output is identical to input (not transformed).`,
      );
      failed = true;
    }
  }

  // (2) re-running the generator must produce byte-identical output
  fs.rmSync(repeatDir, { recursive: true, force: true });
  cp.execSync("pnpm run generate:repeat", {
    cwd: __dirname,
    stdio: "ignore",
  });
  for (const file of files) {
    const first = fs.readFileSync(`${outputDir}/${file}`, "utf8");
    const second = fs.readFileSync(`${repeatDir}/${file}`, "utf8");
    if (first !== second) {
      console.error(`Bug on ${file}: regeneration is not deterministic.`);
      failed = true;
    }
  }
  fs.rmSync(repeatDir, { recursive: true, force: true });

  if (failed) process.exit(1);
  console.log(
    `All ${files.length} generate outputs are transformed and deterministic.`,
  );
};
main();
