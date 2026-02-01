import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_validate_TypeTagMatrix = (): void => _test_validate(
    "TypeTagMatrix",
)<TypeTagMatrix>(
    TypeTagMatrix
)((input) => typia.validate<TypeTagMatrix>(input));
