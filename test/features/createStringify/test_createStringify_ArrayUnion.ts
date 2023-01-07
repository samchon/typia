import typia from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ArrayUnion = _test_stringify(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createStringify<ArrayUnion>(),
);