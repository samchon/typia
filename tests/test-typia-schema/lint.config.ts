import type { ITtscLintConfig } from "@ttsc/lint";

// The runtime-cache regression uses this workspace's installed lint toolchain.
// Its direct dependency also selects lint for the suite itself.
export default {
  files: ["src/**"],
  rules: { "no-debugger": "error" },
} satisfies ITtscLintConfig;
