import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_json_assertStringify_ArraySimple = _test_json_assertStringify(
    "ArraySimple",
    ArraySimple.generate,
    typia.json.createAssertStringify<ArraySimple>(),
    ArraySimple.SPOILERS,
);
