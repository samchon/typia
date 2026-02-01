import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_equals_FunctionalArrayUnion = (): void => _test_equals(
    "FunctionalArrayUnion",
)<FunctionalArrayUnion>(
    FunctionalArrayUnion
)((input) => typia.equals<FunctionalArrayUnion>(input));
