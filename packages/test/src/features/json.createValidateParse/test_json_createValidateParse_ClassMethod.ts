import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_json_createValidateParse_ClassMethod =
  _test_json_validateParse("ClassMethod")<ClassMethod>(ClassMethod)(
    typia.json.createValidateParse<ClassMethod>(),
  );
