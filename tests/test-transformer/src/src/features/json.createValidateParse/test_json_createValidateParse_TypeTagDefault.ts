import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_json_createValidateParse_TypeTagDefault = (): void => _test_json_validateParse(
    "TypeTagDefault",
)<TypeTagDefault>(
    TypeTagDefault
)(typia.json.createValidateParse<TypeTagDefault>());
