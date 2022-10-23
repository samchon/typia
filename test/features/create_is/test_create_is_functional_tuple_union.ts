import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_is } from "./../is/_test_is";

export const test_create_is_functional_tuple_union = _test_is(
    "functional union tuple",
    FunctionalTupleUnion.generate,
    TSON.createIs<FunctionalTupleUnion>(),
    FunctionalTupleUnion.SPOILERS,
);
