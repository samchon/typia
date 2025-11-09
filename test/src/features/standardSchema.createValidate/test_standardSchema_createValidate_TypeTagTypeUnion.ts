import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_standardSchema_createValidate_TypeTagTypeUnion = (): void => _test_standardSchema_validate(
    "TypeTagTypeUnion",
)<TypeTagTypeUnion>(
    TypeTagTypeUnion
)(typia.createValidate<TypeTagTypeUnion>());
