import typia from "../../../src";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_equals_TypeTagTuple = _test_equals(
    "TypeTagTuple",
)<TypeTagTuple>(
    TypeTagTuple
)((input) => typia.equals<TypeTagTuple>(input));
