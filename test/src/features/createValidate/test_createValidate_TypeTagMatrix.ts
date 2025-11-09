import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_createValidate_TypeTagMatrix = (): void => _test_validate(
    "TypeTagMatrix",
)<TypeTagMatrix>(
    TypeTagMatrix
)(typia.createValidate<TypeTagMatrix>());
