import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_json_validateStringify_DynamicArray =
    _test_json_validateStringify(
        "DynamicArray",
        DynamicArray.generate,
        (input) => typia.json.validateStringify(input),
        DynamicArray.SPOILERS,
    );
