import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_misc_prune_DynamicConstant = _test_misc_prune(
  "DynamicConstant",
)<DynamicConstant>(DynamicConstant)((input) =>
  typia.misc.prune<DynamicConstant>(input),
);
