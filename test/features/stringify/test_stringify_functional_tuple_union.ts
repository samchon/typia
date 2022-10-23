import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_functional_tuple_union = _test_stringify(
    "functional union tuple",
    FunctionalTupleUnion.generate(),
    (input) => TSON.stringify(input),
    (json, data) => json === JSON.stringify(data),
);
