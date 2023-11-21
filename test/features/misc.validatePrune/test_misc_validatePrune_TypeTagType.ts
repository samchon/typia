import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_validatePrune_TypeTagType = _test_misc_validatePrune(
  "TypeTagType",
)<TypeTagType>(TypeTagType)((input) =>
  typia.misc.validatePrune<TypeTagType>(input),
);
