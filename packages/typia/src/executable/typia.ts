#!/usr/bin/env node
const USAGE = `Wrong command has been detected. Use like below:

  npx typia setup \\
    --manager (npm|pnpm|yarn) \\
    --project {tsconfig.json file path}

    - npx typia setup
    - npx typia setup --manager pnpm
    - npx typia setup --project tsconfig.test.json

  npx typia generate 
    --input {directory} \\
    --output {directory}

    --npx typia generate --input src/templates --output src/functional
`;

const halt = (desc: string): never => {
  console.error(desc);
  process.exit(-1);
};

const main = async (): Promise<void> => {
  try {
    await import("comment-json");
    await import("inquirer");
    await import("commander");
  } catch {
    halt(`typia has not been installed. Run "npm i typia" before.`);
  }

  const type: string | undefined = process.argv[2];
  if (type === "setup") {
    const { TypiaSetupWizard } = await import("./TypiaSetupWizard");
    await TypiaSetupWizard.setup();
  } else if (type === "patch") {
    const { TypiaPatchWizard } = await import("./TypiaPatchWizard");
    await TypiaPatchWizard.main();
  } else if (type === "generate") {
    try {
      await import("typescript");
    } catch {
      halt(
        `typescript has not been installed. Run "npm i -D typescript" before.`,
      );
    }
    const { TypiaGenerateWizard } = await import("./TypiaGenerateWizard");
    await TypiaGenerateWizard.generate();
  } else halt(USAGE);
};
main().catch((exp) => {
  console.error(exp);
  process.exit(-1);
});
