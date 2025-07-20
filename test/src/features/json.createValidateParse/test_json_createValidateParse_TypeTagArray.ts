import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_json_createValidateParse_TypeTagArray = (): void =>
  _test_json_validateParse("TypeTagArray")<TypeTagArray>(TypeTagArray)(
    typia.json.createValidateParse<TypeTagArray>(),
  );
