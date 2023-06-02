import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_createStringify_ArraySimple = _test_stringify(
    "ArraySimple",
    ArraySimple.generate,
    typia.createStringify<ArraySimple>(),
);
