import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_validate_FunctionalArrayUnion = (): void => _test_validate(
    "FunctionalArrayUnion",
)<FunctionalArrayUnion>(
    FunctionalArrayUnion
)((input) => typia.validate<FunctionalArrayUnion>(input));
