import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ArrayRecursive = _test_stringify(
    "ArrayRecursive",
    ArrayRecursive.generate,
    TSON.createStringify<ArrayRecursive>(),
);
