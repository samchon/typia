import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_json_createValidateParse_TypeTagType = (): void =>
  _test_json_validateParse("TypeTagType")<TypeTagType>(TypeTagType)(
    typia.json.createValidateParse<TypeTagType>(),
  );
