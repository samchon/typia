import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_createIsPrune_TypeTagType = _test_misc_isPrune(
  "TypeTagType",
)<TypeTagType>(TypeTagType)(typia.misc.createIsPrune<TypeTagType>());
