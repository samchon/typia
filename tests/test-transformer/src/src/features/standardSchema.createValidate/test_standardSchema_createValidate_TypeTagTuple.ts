import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_standardSchema_createValidate_TypeTagTuple = (): void => _test_standardSchema_validate(
    "TypeTagTuple",
)<TypeTagTuple>(
    TypeTagTuple
)(typia.createValidate<TypeTagTuple>());
