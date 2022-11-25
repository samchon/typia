import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_FunctionalArray = _test_equals(
    "FunctionalArray",
    FunctionalArray.generate,
    (input) => TSON.equals(input),
);