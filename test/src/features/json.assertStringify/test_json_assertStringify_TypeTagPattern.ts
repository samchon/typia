import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_TypeTagPattern = (): void => _test_json_assertStringify(TypeGuardError)(
    "TypeTagPattern",
)<TypeTagPattern>(
    TypeTagPattern
)((input) => typia.json.assertStringify<TypeTagPattern>(input));
