import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_json_assertStringify_ArrayAny = _test_json_assertStringify(
    "ArrayAny",
    ArrayAny.generate,
    typia.json.createAssertStringify<ArrayAny>(),
    ArrayAny.SPOILERS,
);
