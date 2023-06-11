import typia from "../../../src";

import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_is } from "../../internal/_test_is";

export const test_is_FunctionalTupleUnion = _test_is(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    (input) => typia.is(input),
    FunctionalTupleUnion.SPOILERS,
);
