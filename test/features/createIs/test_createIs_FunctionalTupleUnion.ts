import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_is } from "../internal/_test_is";

export const test_createIs_FunctionalTupleUnion = _test_is(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    TSON.createIs<FunctionalTupleUnion>(),
    FunctionalTupleUnion.SPOILERS,
);