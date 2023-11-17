import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_createAssertGuardEquals_TypeTagType = _test_assertGuardEquals(
    "TypeTagType",
)<TypeTagType>(TypeTagType)(typia.createAssertGuardEquals<TypeTagType>());
