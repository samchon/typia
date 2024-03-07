import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_TypeTagObjectUnion =
  _test_json_assertParse(TypeGuardError)(
    "TypeTagObjectUnion",
  )<TypeTagObjectUnion>(TypeTagObjectUnion)(
    typia.json.createAssertParse<TypeTagObjectUnion>(),
  );
