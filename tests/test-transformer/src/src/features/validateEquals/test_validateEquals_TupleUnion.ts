import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_validateEquals_TupleUnion = (): void => _test_validateEquals(
    "TupleUnion",
)<TupleUnion>(
    TupleUnion
)((input) => typia.validateEquals<TupleUnion>(input));
