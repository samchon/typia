import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_FunctionalTupleUnion = _test_assertClone(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    TSON.createAssertClone<FunctionalTupleUnion>(),
    FunctionalTupleUnion.SPOILERS,
);
