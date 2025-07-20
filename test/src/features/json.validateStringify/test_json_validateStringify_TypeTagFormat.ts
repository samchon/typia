import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_json_validateStringify_TypeTagFormat = (): void =>
  _test_json_validateStringify("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)(
    (input) => typia.json.validateStringify<TypeTagFormat>(input),
  );
