import typia from "typia";

import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_functional_isParametersAsync_ObjectIntersection =
  _test_functional_isParametersAsync("ObjectIntersection")(ObjectIntersection)(
    (p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
      async (input: ObjectIntersection): Promise<ObjectIntersection | null> => {
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
        return p(input);
      },
  );
