import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_createAssert_TypeTagArray = _test_assert(
    "TypeTagArray",
)<TypeTagArray>(
    TypeTagArray
)(typia.createAssert<TypeTagArray>());
