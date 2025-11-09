import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagType } from "../../structures/TypeTagType";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_TypeTagType = (): void => _test_json_assertStringify(TypeGuardError)(
    "TypeTagType",
)<TypeTagType>(
    TypeTagType
)((input) => typia.json.assertStringify<TypeTagType>(input));
