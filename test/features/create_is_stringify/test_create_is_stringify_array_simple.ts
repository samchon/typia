import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_array_simple = _test_is_stringify(
    "simple array",
    ArraySimple.generate,
    TSON.createIsStringify<ArraySimple>(),
    ArraySimple.SPOILERS,
);
