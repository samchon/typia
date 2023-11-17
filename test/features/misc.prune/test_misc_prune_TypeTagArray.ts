import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_misc_prune_TypeTagArray = _test_misc_prune(
  "TypeTagArray",
)<TypeTagArray>(TypeTagArray)((input) => typia.misc.prune<TypeTagArray>(input));
