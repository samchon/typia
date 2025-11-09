import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_TypeTagArray = (): void => _test_json_assertStringify(CustomGuardError)(
    "TypeTagArray",
)<TypeTagArray>(
    TypeTagArray
)((input) => typia.json.assertStringify<TypeTagArray>(input, (p) => new CustomGuardError(p)));
