import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_json_isStringify_TypeTagType = (): void =>
  _test_json_isStringify("TypeTagType")<TypeTagType>(TypeTagType)((input) =>
    typia.json.isStringify<TypeTagType>(input),
  );
