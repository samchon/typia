import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleUnion } from "../../structures/TupleUnion";

import { TypeGuardError } from "typia";

export const test_assertEquals_TupleUnion = _test_assertEquals(TypeGuardError)(
    "TupleUnion",
)<TupleUnion>(
    TupleUnion
)((input) => typia.assertEquals<TupleUnion>(input));
