import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createValidateEquals_ObjectIntersection = (): void =>
  _test_validateEquals("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )(typia.createValidateEquals<ObjectIntersection>());
