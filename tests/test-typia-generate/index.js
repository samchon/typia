/**
 * Verifies that `typia generate` actually transforms each input file.
 *
 * Pins the regression where `typia generate` discarded the transform
 * result and copied the original input verbatim into the output. Every
 * `src/input/generate_*.ts` fixture contains `typia.*<T>()` call sites,
 * so a correctly transformed output can never be byte-identical to its
 * input file.
 *
 * 1. Run `pnpm run generate` then `pnpm run build` (the `start` script).
 * 2. For each input file, read the matching generated output file.
 * 3. Fail if any output is missing or identical to its input file.
 */
const fs = require("fs");

const inputDir = `${__dirname}/src/input`;
const outputDir = `${__dirname}/src/output`;

const main = () => {
  const files = fs
    .readdirSync(inputDir)
    .filter((file) => file.endsWith(".ts"));
  let failed = false;
  for (const file of files) {
    const input = fs.readFileSync(`${inputDir}/${file}`, "utf8");
    const outputPath = `${outputDir}/${file}`;
    if (fs.existsSync(outputPath) === false) {
      console.error(`Bug on ${file}: output file was not generated.`);
      failed = true;
      continue;
    }
    const output = fs.readFileSync(outputPath, "utf8");
    if (input === output) {
      console.error(
        `Bug on ${file}: output is identical to input (not transformed).`,
      );
      failed = true;
    }
  }
  if (failed) process.exit(1);
  console.log(`All ${files.length} generate outputs were transformed.`);
};
main();
