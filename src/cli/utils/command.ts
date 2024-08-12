import cp from "child_process";

export function run(str: string): void {
    console.log(`\n$ ${str}`);
    cp.execSync(str, { stdio: "inherit" });
};
