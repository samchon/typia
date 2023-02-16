import typia from "typia";

import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_is } from "../internal/_test_is";

export const test_createIs_FunctionalTupleUnion = _test_is(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    typia.createIs<FunctionalTupleUnion>(),
    FunctionalTupleUnion.SPOILERS,
);
