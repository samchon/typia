import typia from "../../../src";

import { TupleUnion } from "../../structures/TupleUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_TupleUnion = _test_equals(
    "TupleUnion",
    TupleUnion.generate,
    (input) => typia.equals(input),
);
