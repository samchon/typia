import typia from "../../../src";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_json_createValidateParse_DynamicEnumeration = _test_json_validateParse(
    "DynamicEnumeration",
)<DynamicEnumeration>(
    DynamicEnumeration
)(typia.json.createValidateParse<DynamicEnumeration>());
