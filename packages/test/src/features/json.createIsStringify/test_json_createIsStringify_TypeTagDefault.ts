import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_json_createIsStringify_TypeTagDefault =
  _test_json_isStringify("TypeTagDefault")<TypeTagDefault>(TypeTagDefault)(
    typia.json.createIsStringify<TypeTagDefault>(),
  );
