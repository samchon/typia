import cp from "child_process";

export namespace CommandExecutor {
    export const run = (str: string): void => {
        console.log(str);
        cp.execSync(str, { stdio: "inherit" });
        // @todo - rollback to ignore
    };
}
