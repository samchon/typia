import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createIs_ObjectIntersection = (): void =>
  _test_is("ObjectIntersection")<ObjectIntersection>(ObjectIntersection)(
    typia.createIs<ObjectIntersection>(),
  );
