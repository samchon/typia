import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_is } from "./_test_is";

export const test_is_functional_tuple = _test_is(
    "functional tuple",
    FunctionalTuple.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0] = null!),
        (input) => (input[0] = undefined!),
        (input) => (input[0] = "string" as any),
        (input) => (input[0] = {} as any),
        (input) => (input[0] = [] as any),
    ],
);
