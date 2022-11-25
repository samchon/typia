import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_functional_array_union = _test_stringify(
    "functional union array",
    FunctionalArrayUnion.generate,
    (input) => TSON.stringify(input),
);
