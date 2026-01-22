import fs from "fs";

const main = async (): Promise<void> => {
  const input: string = await fs.promises.readFile(
    `${__dirname}/../src/structures/IMcpLlmController.ts`,
    "utf8",
  );
  await fs.promises.writeFile(
    `${__dirname}/../lib/structures/IMcpLlmController.d.ts`,
    input,
    "utf8",
  );
  await fs.promises.writeFile(
    `${__dirname}/../lib/structures/IMcpLlmController.d.mts`,
    input,
    "utf8",
  );
};
main().catch((error) => {
  console.error(error);
  process.exit(-1);
});
