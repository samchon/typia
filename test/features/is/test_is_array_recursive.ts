import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_is } from "./_test_is";

export const test_is_array_recursive = _test_is(
    "recursive array",
    ArrayRecursive.generate,
    (input) => TSON.is(input),
    [
        (input) => (input.id = null!),
        (input) => (input.code = 3 as any),
        (input) => (input.sequence = "number" as any),
        (input) => (input.created_at = [] as any),
        (input) => (input.children = { length: 0 } as any[]),
        (input) => (input.children[0].children[0].sequence = "number" as any),
    ],
);
