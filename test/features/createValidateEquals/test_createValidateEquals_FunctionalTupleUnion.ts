import typia from "typia";

import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_FunctionalTupleUnion = _test_validateEquals(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    typia.createValidateEquals<FunctionalTupleUnion>(),
);
