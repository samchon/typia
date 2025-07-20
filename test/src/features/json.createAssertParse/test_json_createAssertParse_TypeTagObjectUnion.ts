import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_json_createAssertParse_TypeTagObjectUnion = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "TypeTagObjectUnion",
  )<TypeTagObjectUnion>(TypeTagObjectUnion)(
    typia.json.createAssertParse<TypeTagObjectUnion>(),
  );
