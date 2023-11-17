import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_misc_isPrune_TypeTagRange = _test_misc_isPrune(
  "TypeTagRange",
)<TypeTagRange>(TypeTagRange)((input) =>
  typia.misc.isPrune<TypeTagRange>(input),
);
