import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_createAssert_TypeTagType = _test_assert(
    "TypeTagType",
)<TypeTagType>(TypeTagType)(typia.createAssert<TypeTagType>());
