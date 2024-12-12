import cp from "child_process";

cp.execSync(`npx ts-node src/debug/${process.argv[2]}.ts`, {
  cwd: __dirname,
  stdio: "inherit",
});
