import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_array_union = _test_stringify(
    "union array",
    ArrayUnion.generate,
    TSON.createStringify<ArrayUnion>(),
);
