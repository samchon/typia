import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_json_createValidateParse_ObjectRequired = (): void =>
  _test_json_validateParse("ObjectRequired")<ObjectRequired>(ObjectRequired)(
    typia.json.createValidateParse<ObjectRequired>(),
  );
