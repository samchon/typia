import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_json_createValidateStringify_TypeTagRange =
  _test_json_validateStringify("TypeTagRange")<TypeTagRange>(TypeTagRange)(
    typia.json.createValidateStringify<TypeTagRange>(),
  );
