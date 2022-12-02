import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_FunctionalArray = _test_isClone(
    "FunctionalArray",
    FunctionalArray.generate,
    (input) => TSON.isClone(input),
    FunctionalArray.SPOILERS,
);
