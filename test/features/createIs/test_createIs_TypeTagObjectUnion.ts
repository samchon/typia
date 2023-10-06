import typia from "../../../src";

import { _test_is } from "../../internal/_test_is";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_createIs_TypeTagObjectUnion = _test_is(
    "TypeTagObjectUnion",
)<TypeTagObjectUnion>(
    TypeTagObjectUnion
)(typia.createIs<TypeTagObjectUnion>());
