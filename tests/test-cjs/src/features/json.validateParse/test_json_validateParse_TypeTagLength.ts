import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_json_validateParse_TypeTagLength = (): void =>
  _test_json_validateParse("TypeTagLength")<TypeTagLength>(TypeTagLength)(
    (input) => typia.json.validateParse<TypeTagLength>(input),
  );
