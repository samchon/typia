import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_createAssert_TypeTagNaN = _test_assert(
    "TypeTagNaN",
)<TypeTagNaN>(
    TypeTagNaN
)(typia.createAssert<TypeTagNaN>());
