import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_standardSchema_createValidate_ObjectIntersection =
  _test_standardSchema_validate("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )(typia.createValidate<ObjectIntersection>());
