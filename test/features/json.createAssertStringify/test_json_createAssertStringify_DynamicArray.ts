import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_json_assertStringify_DynamicArray =
    _test_json_assertStringify(
        "DynamicArray",
        DynamicArray.generate,
        typia.json.createAssertStringify<DynamicArray>(),
        DynamicArray.SPOILERS,
    );
