#!/usr/bin/env node
const USAGE = `Wrong command has been detected. Use like below:

  npx typia generate
    --input {directory} \\
    --output {directory}

  npx typia generate
    --output {directory} \\
    {file...}

    --npx typia generate --input src/templates --output src/functional
    --npx typia generate --output src/functional src/**/*.typia.ts
`;

const halt = (desc: string): never => {
  console.error(desc);
  process.exit(-1);
};

const loadNativePreview = (): void => {
  const resolvers: Array<() => string> = [
    () =>
      require.resolve("@typescript/native-preview/package.json", {
        paths: [process.cwd()],
      }),
    () => require.resolve("@typescript/native-preview/package.json"),
  ];
  for (const resolve of resolvers) {
    try {
      resolve();
      return;
    } catch {}
  }
  halt(
    `@typescript/native-preview has not been installed. Run "npm i -D @typescript/native-preview" before.`,
  );
};

const main = async (): Promise<void> => {
  try {
    await import("inquirer");
    await import("commander");
  } catch {
    halt(`typia has not been installed. Run "npm i typia" before.`);
  }

  const type: string | undefined = process.argv[2];
  if (type === "generate") {
    loadNativePreview();
    const { TypiaGenerateWizard } = await import("./TypiaGenerateWizard.js");
    await TypiaGenerateWizard.generate();
  } else halt(USAGE);
};
main().catch((exp) => {
  console.error(exp);
  process.exit(-1);
});
