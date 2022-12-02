import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_FunctionalTupleUnion = _test_isClone(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    TSON.createIsClone<FunctionalTupleUnion>(),
    FunctionalTupleUnion.SPOILERS,
);
