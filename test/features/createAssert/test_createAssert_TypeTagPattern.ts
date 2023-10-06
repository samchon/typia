import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_createAssert_TypeTagPattern = _test_assert(
    "TypeTagPattern",
)<TypeTagPattern>(
    TypeTagPattern
)(typia.createAssert<TypeTagPattern>());
