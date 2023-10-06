import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_json_createAssertStringify_DynamicEnumeration =
    _test_json_assertStringify("DynamicEnumeration")<DynamicEnumeration>(
        DynamicEnumeration,
    )(typia.json.createAssertStringify<DynamicEnumeration>());
