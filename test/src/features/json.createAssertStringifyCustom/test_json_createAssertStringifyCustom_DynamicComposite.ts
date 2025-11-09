import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_DynamicComposite = (): void => _test_json_assertStringify(CustomGuardError)(
    "DynamicComposite",
)<DynamicComposite>(
    DynamicComposite
)(typia.json.createAssertStringify<DynamicComposite>((p) => new CustomGuardError(p)));
