import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ArraySimple = _test_stringify(
    "ArraySimple",
    ArraySimple.generate,
    TSON.createStringify<ArraySimple>(),
);