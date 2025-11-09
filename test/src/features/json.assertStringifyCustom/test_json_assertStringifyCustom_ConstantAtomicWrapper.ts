import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ConstantAtomicWrapper = (): void => _test_json_assertStringify(CustomGuardError)(
    "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(
    ConstantAtomicWrapper
)((input) => typia.json.assertStringify<ConstantAtomicWrapper>(input, (p) => new CustomGuardError(p)));
