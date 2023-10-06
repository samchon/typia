import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_assert_TypeTagMatrix = _test_assert(
    "TypeTagMatrix",
)<TypeTagMatrix>(
    TypeTagMatrix
)((input) => typia.assert<TypeTagMatrix>(input));
