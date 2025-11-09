import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_TypeTagFormat = (): void => _test_json_assertStringify(CustomGuardError)(
    "TypeTagFormat",
)<TypeTagFormat>(
    TypeTagFormat
)((input) => typia.json.assertStringify<TypeTagFormat>(input, (p) => new CustomGuardError(p)));
