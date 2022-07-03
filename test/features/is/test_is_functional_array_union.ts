import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_is } from "./_test_is";

export const test_is_functional_array_union = _test_is(
    "functional union array",
    FunctionalArrayUnion.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0]![0] = null!),
        (input) => (input[0]![0] = undefined!),
        (input) => (input[0]![0] = {} as any),
        (input) => (input[0]![0] = [] as any),
    ],
);
