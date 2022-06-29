import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_functional_array = _test_stringify(
    "functional array",
    FunctionalArray.generate(),
    (input) => TSON.stringify(input),
);
