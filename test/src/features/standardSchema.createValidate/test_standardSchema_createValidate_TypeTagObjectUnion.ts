import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_standardSchema_createValidate_TypeTagObjectUnion = _test_standardSchema_validate(
    "TypeTagObjectUnion",
)<TypeTagObjectUnion>(
    TypeTagObjectUnion
)(typia.createValidate<TypeTagObjectUnion>());
