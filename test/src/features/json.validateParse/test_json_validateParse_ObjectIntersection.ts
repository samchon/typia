import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_json_validateParse_ObjectIntersection = (): void =>
  _test_json_validateParse("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )((input) => typia.json.validateParse<ObjectIntersection>(input));
