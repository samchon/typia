import typia from "../../../src";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_json_createAssertParse_ConstantEnumeration = _test_json_assertParse(
    "ConstantEnumeration",
)<ConstantEnumeration>(
    ConstantEnumeration
)(typia.json.createAssertParse<ConstantEnumeration>());
