import { test_webpack_filesystem_cache_invalidation } from "./test_webpack_filesystem_cache_invalidation";

const main = async (): Promise<void> => {
  await test_webpack_filesystem_cache_invalidation();
  console.log("Success");
};
main().catch((error) => {
  console.error(error);
  process.exit(1);
});
