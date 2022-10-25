import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_functional_tuple_union = _test_is_stringify(
    "functional union tuple",
    FunctionalTupleUnion.generate,
    (input) => TSON.isStringify(input),
    FunctionalTupleUnion.SPOILERS,
);
