import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_json_validateStringify_TypeTagType = (): void =>
  _test_json_validateStringify("TypeTagType")<TypeTagType>(TypeTagType)(
    (input) => typia.json.validateStringify<TypeTagType>(input),
  );
