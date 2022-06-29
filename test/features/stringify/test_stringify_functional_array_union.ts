import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_stringify_for_of } from "./_test_stringify_for_of";

export const test_stringify_functional_array_union = _test_stringify_for_of(
    "functional union array",
    FunctionalArrayUnion.generate(),
    (input) => TSON.stringify(input),
);
