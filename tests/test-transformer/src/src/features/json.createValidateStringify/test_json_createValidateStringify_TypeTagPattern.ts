import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_json_createValidateStringify_TypeTagPattern = (): void => _test_json_validateStringify(
    "TypeTagPattern",
)<TypeTagPattern>(
    TypeTagPattern
)(typia.json.createValidateStringify<TypeTagPattern>());
