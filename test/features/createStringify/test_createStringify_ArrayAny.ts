import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_createStringify_ArrayAny = _test_stringify(
    "ArrayAny",
    ArrayAny.generate,
    typia.createStringify<ArrayAny>(),
);
