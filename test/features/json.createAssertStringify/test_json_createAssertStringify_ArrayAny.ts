import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_json_createAssertStringify_ArrayAny =
    _test_json_assertStringify("ArrayAny")<ArrayAny>(ArrayAny)(
        typia.json.createAssertStringify<ArrayAny>(),
    );
