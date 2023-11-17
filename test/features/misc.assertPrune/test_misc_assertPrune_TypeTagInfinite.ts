import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_misc_assertPrune_TypeTagInfinite = _test_misc_assertPrune(
  "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)((input) =>
  typia.misc.assertPrune<TypeTagInfinite>(input),
);
