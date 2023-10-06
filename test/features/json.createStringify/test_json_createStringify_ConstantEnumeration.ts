import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_json_createStringify_ConstantEnumeration = _test_json_stringify(
    "ConstantEnumeration",
)<ConstantEnumeration>(
    ConstantEnumeration
)(typia.json.createStringify<ConstantEnumeration>());
