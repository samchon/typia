import typia from "../../../src";

import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_FunctionalTupleUnion = _test_assertEquals(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    (input) => typia.assertEquals(input),
);
