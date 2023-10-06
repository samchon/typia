import typia from "../../../src";

import { _test_validate } from "../../internal/_test_validate";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_createValidate_TypeTagObjectUnion = _test_validate(
    "TypeTagObjectUnion",
)<TypeTagObjectUnion>(
    TypeTagObjectUnion
)(typia.createValidate<TypeTagObjectUnion>());
