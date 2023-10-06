import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_json_createStringify_DynamicEnumeration =
    _test_json_stringify("DynamicEnumeration")<DynamicEnumeration>(
        DynamicEnumeration,
    )(typia.json.createStringify<DynamicEnumeration>());
