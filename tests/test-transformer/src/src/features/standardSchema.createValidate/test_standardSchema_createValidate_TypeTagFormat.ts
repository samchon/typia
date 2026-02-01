import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_standardSchema_createValidate_TypeTagFormat = (): void => _test_standardSchema_validate(
    "TypeTagFormat",
)<TypeTagFormat>(
    TypeTagFormat
)(typia.createValidate<TypeTagFormat>());
