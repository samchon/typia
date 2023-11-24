import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_json_createAssertStringify_ConstantIntersection =
  _test_json_assertStringify("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )(typia.json.createAssertStringify<ConstantIntersection>());
