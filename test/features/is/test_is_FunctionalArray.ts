import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_is } from "../internal/_test_is";

export const test_is_FunctionalArray = _test_is(
    "FunctionalArray",
    FunctionalArray.generate,
    (input) => TSON.is(input),
    FunctionalArray.SPOILERS,
);
