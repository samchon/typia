import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_json_assertStringify_ArrayRepeatedUnion =
    _test_json_assertStringify(
        "ArrayRepeatedUnion",
        ArrayRepeatedUnion.generate,
        typia.json.createAssertStringify<ArrayRepeatedUnion>(),
        ArrayRepeatedUnion.SPOILERS,
    );
