import cp from "child_process";

export namespace CommandExecutor {
    export function run(str: string): void {
        console.log(str);
        cp.execSync(str, { stdio: "ignore" });
    }
}
