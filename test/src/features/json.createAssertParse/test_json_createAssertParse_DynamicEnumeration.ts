import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_DynamicEnumeration = (): void => _test_json_assertParse(TypeGuardError)(
    "DynamicEnumeration",
)<DynamicEnumeration>(
    DynamicEnumeration
)(typia.json.createAssertParse<DynamicEnumeration>());
