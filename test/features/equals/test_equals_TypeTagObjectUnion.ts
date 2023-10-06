import typia from "../../../src";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_equals_TypeTagObjectUnion = _test_equals(
    "TypeTagObjectUnion",
)<TypeTagObjectUnion>(
    TypeTagObjectUnion
)((input) => typia.equals<TypeTagObjectUnion>(input));
