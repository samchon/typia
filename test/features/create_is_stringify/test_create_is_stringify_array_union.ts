import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_array_union = _test_is_stringify(
    "union arrray",
    ArrayUnion.generate,
    TSON.createIsStringify<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
