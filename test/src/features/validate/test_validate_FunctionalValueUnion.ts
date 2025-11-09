import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_validate_FunctionalValueUnion = (): void => _test_validate(
    "FunctionalValueUnion",
)<FunctionalValueUnion>(
    FunctionalValueUnion
)((input) => typia.validate<FunctionalValueUnion>(input));
