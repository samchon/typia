import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_assert_TypeTagTuple = _test_assert(
    "TypeTagTuple",
)<TypeTagTuple>(
    TypeTagTuple
)((input) => typia.assert<TypeTagTuple>(input));
