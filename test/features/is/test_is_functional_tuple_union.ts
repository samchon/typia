import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_is } from "./_test_is";

export const test_is_functional_tuple_union = _test_is(
    "functional union tuple",
    FunctionalTupleUnion.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0] = undefined!),
        (input) => (input[1] = false as any),
        (input) => (input[2] = {} as any),
        (input) => (input[3] = [] as any),
    ],
);
