import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_equals_FunctionalTupleUnion = (): void => _test_equals(
    "FunctionalTupleUnion",
)<FunctionalTupleUnion>(
    FunctionalTupleUnion
)((input) => typia.equals<FunctionalTupleUnion>(input));
