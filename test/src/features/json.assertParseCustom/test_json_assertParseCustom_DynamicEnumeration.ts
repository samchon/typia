import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_DynamicEnumeration = (): void => _test_json_assertParse(CustomGuardError)(
    "DynamicEnumeration",
)<DynamicEnumeration>(
    DynamicEnumeration
)((input) => typia.json.assertParse<DynamicEnumeration>(input, (p) => new CustomGuardError(p)));
