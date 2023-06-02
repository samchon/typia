import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_createStringify_ArrayRepeatedUnion = _test_stringify(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    typia.createStringify<ArrayRepeatedUnion>(),
);
