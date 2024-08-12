import cp from "child_process";

export const run = (str: string): void => {
  console.log(`\n$ ${str}`);
  cp.execSync(str, { stdio: "inherit" });
};
