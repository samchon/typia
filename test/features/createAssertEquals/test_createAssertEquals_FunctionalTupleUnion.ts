import typia from "typia";

import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_FunctionalTupleUnion = _test_assertEquals(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    typia.createAssertEquals<FunctionalTupleUnion>(),
);
