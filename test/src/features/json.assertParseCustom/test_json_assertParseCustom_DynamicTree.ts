import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicTree } from "../../structures/DynamicTree";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_DynamicTree = (): void => _test_json_assertParse(CustomGuardError)(
    "DynamicTree",
)<DynamicTree>(
    DynamicTree
)((input) => typia.json.assertParse<DynamicTree>(input, (p) => new CustomGuardError(p)));
