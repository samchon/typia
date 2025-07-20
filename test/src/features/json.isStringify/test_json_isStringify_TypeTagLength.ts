import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_json_isStringify_TypeTagLength = (): void =>
  _test_json_isStringify("TypeTagLength")<TypeTagLength>(TypeTagLength)(
    (input) => typia.json.isStringify<TypeTagLength>(input),
  );
