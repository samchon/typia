import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_json_validateParse_TypeTagObjectUnion =
  _test_json_validateParse("TypeTagObjectUnion")<TypeTagObjectUnion>(
    TypeTagObjectUnion,
  )((input) => typia.json.validateParse<TypeTagObjectUnion>(input));
