import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_array_recursive = _test_stringify(
    "recursive array",
    ArrayRecursive.generate,
    TSON.createStringify<ArrayRecursive>(),
);
