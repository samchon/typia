import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_createAssert_TypeTagDefault = _test_assert(
    "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)(typia.createAssert<TypeTagDefault>());
