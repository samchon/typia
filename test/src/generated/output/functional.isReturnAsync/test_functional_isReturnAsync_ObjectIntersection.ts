import typia from "typia";

import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_functional_isReturnAsync_ObjectIntersection =
  _test_functional_isReturnAsync("ObjectIntersection")(ObjectIntersection)(
    (p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
      async (input: ObjectIntersection): Promise<ObjectIntersection | null> => {
        const result = await p(input);
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
