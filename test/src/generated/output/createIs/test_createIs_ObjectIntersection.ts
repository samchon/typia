import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_createIs_ObjectIntersection = _test_is(
  "ObjectIntersection",
)<ObjectIntersection>(ObjectIntersection)(
  (input: any): input is ObjectIntersection => {
    return (
      "object" === typeof input &&
      null !== input &&
      "string" === typeof (input as any).email &&
      "string" === typeof (input as any).name &&
      "boolean" === typeof (input as any).vulnerable
    );
  },
);
