import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_TypeTagCustom = (): void => _test_json_assertStringify(TypeGuardError)(
    "TypeTagCustom",
)<TypeTagCustom>(
    TypeTagCustom
)((input) => typia.json.assertStringify<TypeTagCustom>(input));
