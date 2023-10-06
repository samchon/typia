import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_json_createValidateStringify_TypeTagType = _test_json_validateStringify(
    "TypeTagType",
)<TypeTagType>(
    TypeTagType
)(typia.json.createValidateStringify<TypeTagType>());
