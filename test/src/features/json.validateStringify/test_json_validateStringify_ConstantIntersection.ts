import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_json_validateStringify_ConstantIntersection = (): void =>
  _test_json_validateStringify("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )((input) => typia.json.validateStringify<ConstantIntersection>(input));
