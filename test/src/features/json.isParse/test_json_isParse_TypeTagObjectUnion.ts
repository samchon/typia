import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_json_isParse_TypeTagObjectUnion = (): void =>
  _test_json_isParse("TypeTagObjectUnion")<TypeTagObjectUnion>(
    TypeTagObjectUnion,
  )((input) => typia.json.isParse<TypeTagObjectUnion>(input));
