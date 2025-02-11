import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_equals_FunctionalPropertyUnion = _test_equals(
    "FunctionalPropertyUnion",
)<FunctionalPropertyUnion>(
    FunctionalPropertyUnion
)((input) => typia.equals<FunctionalPropertyUnion>(input));
