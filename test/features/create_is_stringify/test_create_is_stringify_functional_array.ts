import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_functional_array = _test_is_stringify(
    "functional array",
    FunctionalArray.generate,
    TSON.createIsStringify<FunctionalArray>(),
    FunctionalArray.SPOILERS,
);
