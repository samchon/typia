import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_misc_prune_TypeTagPattern = _test_misc_prune(
  "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)((input) =>
  typia.misc.prune<TypeTagPattern>(input),
);
