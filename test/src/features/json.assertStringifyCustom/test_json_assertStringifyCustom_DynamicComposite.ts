import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_DynamicComposite = (): void => _test_json_assertStringify(CustomGuardError)(
    "DynamicComposite",
)<DynamicComposite>(
    DynamicComposite
)((input) => typia.json.assertStringify<DynamicComposite>(input, (p) => new CustomGuardError(p)));
