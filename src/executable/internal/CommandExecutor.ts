import cp from "child_process";

export namespace CommandExecutor {
    export function run(str: string, silent: boolean): void {
        if (silent === false) console.log(str);
        cp.execSync(str, { stdio: "ignore" });
    }
}
