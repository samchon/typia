import typia from "typia";

import { TupleUnion } from "../../structures/TupleUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_TupleUnion = _test_equals(
    "TupleUnion",
    TupleUnion.generate,
    typia.createEquals<TupleUnion>(),
);
