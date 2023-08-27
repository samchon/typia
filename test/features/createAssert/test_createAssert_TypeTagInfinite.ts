import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_assert_TypeTagInfinite = _test_assert(
    "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)(typia.createAssert<TypeTagInfinite>());
