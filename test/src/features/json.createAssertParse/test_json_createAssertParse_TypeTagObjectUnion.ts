import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_json_createAssertParse_TypeTagObjectUnion =
  _test_json_assertParse("TypeTagObjectUnion")<TypeTagObjectUnion>(
    TypeTagObjectUnion,
  )(typia.json.createAssertParse<TypeTagObjectUnion>());
