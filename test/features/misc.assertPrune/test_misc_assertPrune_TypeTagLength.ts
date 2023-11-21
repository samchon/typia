import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_misc_assertPrune_TypeTagLength = _test_misc_assertPrune(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)((input) =>
  typia.misc.assertPrune<TypeTagLength>(input),
);
