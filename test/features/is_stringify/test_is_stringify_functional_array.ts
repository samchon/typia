import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_functional_array = _test_is_stringify(
    "functional array",
    FunctionalArray.generate,
    (input) => TSON.isStringify(input),
    FunctionalArray.SPOILERS,
);
