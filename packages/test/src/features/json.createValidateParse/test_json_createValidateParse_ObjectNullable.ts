import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_json_createValidateParse_ObjectNullable =
  _test_json_validateParse("ObjectNullable")<ObjectNullable>(ObjectNullable)(
    typia.json.createValidateParse<ObjectNullable>(),
  );
