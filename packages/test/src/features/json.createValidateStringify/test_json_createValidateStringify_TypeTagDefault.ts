import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_json_createValidateStringify_TypeTagDefault =
  _test_json_validateStringify("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )(typia.json.createValidateStringify<TypeTagDefault>());
