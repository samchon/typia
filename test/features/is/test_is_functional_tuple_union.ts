import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_functional_tuple_union = _test_is(
    "functional union tuple",
    FunctionalTupleUnion.generate,
    (input) => TSON.is(input),
    FunctionalTupleUnion.SPOILERS,
);
