import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_DynamicComposite = (): void => _test_json_assertParse(CustomGuardError)(
    "DynamicComposite",
)<DynamicComposite>(
    DynamicComposite
)((input) => typia.json.assertParse<DynamicComposite>(input, (p) => new CustomGuardError(p)));
