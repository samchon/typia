import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_json_assertStringify_ArrayRepeatedRequired =
    _test_json_assertStringify<ArrayRepeatedRequired>(ArrayRepeatedRequired)(
        typia.json.createAssertStringify<ArrayRepeatedRequired>(),
    );
