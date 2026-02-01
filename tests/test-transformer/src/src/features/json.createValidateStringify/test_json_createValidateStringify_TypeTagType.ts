import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_json_createValidateStringify_TypeTagType = (): void => _test_json_validateStringify(
    "TypeTagType",
)<TypeTagType>(
    TypeTagType
)(typia.json.createValidateStringify<TypeTagType>());
