import typia from "typia";

import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_functional_isReturn_ObjectIntersection =
  _test_functional_isReturn("ObjectIntersection")(ObjectIntersection)(
    (p: (input: ObjectIntersection) => ObjectIntersection) =>
      (input: ObjectIntersection): ObjectIntersection | null => {
        const result = p(input);
        return ((input: any): input is ObjectIntersection => {
          return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).email &&
            "string" === typeof (input as any).name &&
            "boolean" === typeof (input as any).vulnerable
          );
        })(result)
          ? result
          : null;
      },
  );
