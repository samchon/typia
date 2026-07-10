import { test_langchain } from "./test_langchain.js";
import { test_mcp } from "./test_mcp.js";
import { test_typia } from "./test_typia.js";
import { test_utils } from "./test_utils.js";
import { test_vercel } from "./test_vercel.js";

/**
 * Runs every per-package ESM check in sequence; any failed `check` throws and
 * the process exits non-zero so CI fails.
 */
const main = async (): Promise<void> => {
  for (const [name, run] of Object.entries({
    typia: test_typia,
    "@typia/utils": test_utils,
    "@typia/mcp": test_mcp,
    "@typia/langchain": test_langchain,
    "@typia/vercel": test_vercel,
  })) {
    console.log(`\n== ${name} ==`);
    await run();
  }
  console.log("\nAll ESM end-to-end checks passed.");
};

main().catch((error) => {
  console.error(error);
  process.exit(-1);
});
