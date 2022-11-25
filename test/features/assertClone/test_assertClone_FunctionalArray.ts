import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_FunctionalArray = _test_assertClone(
    "FunctionalArray",
    FunctionalArray.generate,
    (input) => TSON.assertClone(input),
    FunctionalArray.SPOILERS,
);