import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_json_createValidateParse_TypeTagTuple = (): void =>
  _test_json_validateParse("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)(
    typia.json.createValidateParse<TypeTagTuple>(),
  );
