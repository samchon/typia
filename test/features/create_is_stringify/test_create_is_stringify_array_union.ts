import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_array_union = _test_is_stringify(
    "union array",
    ArrayUnion.generate,
    TSON.createIsStringify<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
