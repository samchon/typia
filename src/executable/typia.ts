import { TypiaSetupWizard } from "./internal/TypiaSetupWizard";

const USAGE = `Usage: npx typia setup (transformer?: "ttypescript" | "ts-patch")

  - npx typia setup
  - npx typia setup ttypescript
  - npx typia setup ts-patch`;

function halt(desc: string): never {
    console.error(desc);
    process.exit(-1);
}

async function setup(): Promise<void> {
    const compiler: string = process.argv[3] ?? "ttypescript";
    if (compiler !== "ttypescript" && compiler !== "ts-patch")
        halt(
            "typia supports only two transformers: ttypescript and ts-patch" +
                "\n\n" +
                USAGE,
        );
    else if (compiler === "ttypescript") await TypiaSetupWizard.ttypescript();
    else await TypiaSetupWizard.tsPatch();
}

async function main(): Promise<void> {
    const type: string | undefined = process.argv[2];
    if (type === undefined) halt(USAGE);
    else if (type === "setup") await setup();
}
main().catch((exp) => {
    console.error(exp);
    process.exit(-1);
});
