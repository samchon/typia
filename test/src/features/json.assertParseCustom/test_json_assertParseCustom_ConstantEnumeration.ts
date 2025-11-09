import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ConstantEnumeration = (): void => _test_json_assertParse(CustomGuardError)(
    "ConstantEnumeration",
)<ConstantEnumeration>(
    ConstantEnumeration
)((input) => typia.json.assertParse<ConstantEnumeration>(input, (p) => new CustomGuardError(p)));
