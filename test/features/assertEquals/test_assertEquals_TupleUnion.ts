import typia from "../../../src";

import { TupleUnion } from "../../structures/TupleUnion";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_TupleUnion = _test_assertEquals(
    "TupleUnion",
    TupleUnion.generate,
    (input) => typia.assertEquals(input),
);
