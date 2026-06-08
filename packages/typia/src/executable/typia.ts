#!/usr/bin/env node
const USAGE = `Wrong command has been detected. Use like below:

  npx typia generate [options] [files...]

  npx typia generate
    --input src/templates \\
    --output src/generated

  npx typia generate
    --output src/generated \\
    "src/**/*.typia.ts"
`;

const halt = (desc: string): never => {
  console.error(desc);
  process.exit(-1);
};

const loadNativePreview = (): void => {
  loadPackage(
    "@typescript/native-preview/package.json",
    `@typescript/native-preview has not been installed. Run "npm i -D ttsc @typescript/native-preview" before.`,
  );
};

const loadTtsc = (): void => {
  loadPackage(
    "ttsc/package.json",
    `ttsc has not been installed. Run "npm i -D ttsc @typescript/native-preview" before.`,
  );
};

const loadPackage = (request: string, desc: string): void => {
  const resolvers: Array<() => string> = [
    () =>
      require.resolve(request, {
        paths: [process.cwd()],
      }),
    () => require.resolve(request),
  ];
  for (const resolve of resolvers) {
    try {
      resolve();
      return;
    } catch {}
  }
  halt(desc);
};

const isHelp = (args: string[]): boolean => {
  return args.some((arg) => arg === "--help" || arg === "-h");
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
    if (isHelp(process.argv.slice(3)) === false) {
      loadTtsc();
      loadNativePreview();
    }
    const { TypiaGenerateWizard } = await import("./TypiaGenerateWizard.js");
    await TypiaGenerateWizard.generate();
  } else halt(USAGE);
};
main().catch((exp) => {
  console.error(exp instanceof URIError ? exp.message : exp);
  process.exit(-1);
});
