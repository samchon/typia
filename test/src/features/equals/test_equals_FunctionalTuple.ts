import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_equals_FunctionalTuple = (): void => _test_equals(
    "FunctionalTuple",
)<FunctionalTuple>(
    FunctionalTuple
)((input) => typia.equals<FunctionalTuple>(input));
