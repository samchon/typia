import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_is } from "./_test_is";

export const test_is_functional_object_union = _test_is(
    "functional union tuple",
    FunctionalTupleUnion.generate,
    (input) => TSON.is(input),
);
