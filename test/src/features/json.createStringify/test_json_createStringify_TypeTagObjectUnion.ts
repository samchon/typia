import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_json_createStringify_TypeTagObjectUnion =
  _test_json_stringify("TypeTagObjectUnion")<TypeTagObjectUnion>(
    TypeTagObjectUnion,
  )(typia.json.createStringify<TypeTagObjectUnion>());
