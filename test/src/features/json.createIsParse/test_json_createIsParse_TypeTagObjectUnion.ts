import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_json_createIsParse_TypeTagObjectUnion = _test_json_isParse(
  "TypeTagObjectUnion",
)<TypeTagObjectUnion>(TypeTagObjectUnion)(
  typia.json.createIsParse<TypeTagObjectUnion>(),
);
