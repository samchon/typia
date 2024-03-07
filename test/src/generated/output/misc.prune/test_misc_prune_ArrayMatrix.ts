import typia from "typia";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
export const test_misc_prune_ArrayMatrix = _test_misc_prune(
  "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)((input) =>
  ((input: ArrayMatrix): void => {})(input),
);
