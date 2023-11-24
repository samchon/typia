import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_json_validateStringify_TypeTagDefault =
  _test_json_validateStringify("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )((input) => typia.json.validateStringify<TypeTagDefault>(input));
