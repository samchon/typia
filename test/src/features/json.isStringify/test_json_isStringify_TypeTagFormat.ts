import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_json_isStringify_TypeTagFormat = (): void =>
  _test_json_isStringify("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)(
    (input) => typia.json.isStringify<TypeTagFormat>(input),
  );
