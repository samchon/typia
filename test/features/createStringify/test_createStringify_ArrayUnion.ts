import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createStringify_ArrayUnion = _test_stringify(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createStringify<ArrayUnion>(),
);
