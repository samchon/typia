import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_TypeTagCustom = (): void => _test_json_assertStringify(CustomGuardError)(
    "TypeTagCustom",
)<TypeTagCustom>(
    TypeTagCustom
)((input) => typia.json.assertStringify<TypeTagCustom>(input, (p) => new CustomGuardError(p)));
