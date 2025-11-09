import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_TypeTagPattern = (): void => _test_json_assertStringify(CustomGuardError)(
    "TypeTagPattern",
)<TypeTagPattern>(
    TypeTagPattern
)((input) => typia.json.assertStringify<TypeTagPattern>(input, (p) => new CustomGuardError(p)));
