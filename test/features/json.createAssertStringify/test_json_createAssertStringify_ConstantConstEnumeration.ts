import typia from "../../../src";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_json_createAssertStringify_ConstantConstEnumeration = _test_json_assertStringify(
    "ConstantConstEnumeration",
)<ConstantConstEnumeration>(
    ConstantConstEnumeration
)(typia.json.createAssertStringify<ConstantConstEnumeration>());
