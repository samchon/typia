import typia from "typia";

import { _test_functional_isFunction } from "../../../internal/_test_functional_isFunction";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_functional_isFunction_ObjectIntersection =
  _test_functional_isFunction("ObjectIntersection")(ObjectIntersection)(
    (p: (input: ObjectIntersection) => ObjectIntersection) =>
      (input: ObjectIntersection): ObjectIntersection | null => {
        if (
          false ===
          ((input: any): input is ObjectIntersection => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).email &&
              "string" === typeof (input as any).name &&
              "boolean" === typeof (input as any).vulnerable
            );
          })(input)
        )
          return null;
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
