import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_is } from "./_test_is";

export const test_is_functional_array = _test_is(
    "functional array",
    FunctionalArray.generate,
    (input) => TSON.is(input),
    FunctionalArray.SPOILERS,
);
