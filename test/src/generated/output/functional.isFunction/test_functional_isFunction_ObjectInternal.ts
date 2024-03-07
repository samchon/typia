import typia from "typia";
import { _test_functional_isFunction } from "../../../internal/_test_functional_isFunction";
import { ObjectInternal } from "../../../structures/ObjectInternal";
export const test_functional_isFunction_ObjectInternal =
  _test_functional_isFunction("ObjectInternal")(ObjectInternal)(
    (p: (input: ObjectInternal) => ObjectInternal) =>
      (input: ObjectInternal): ObjectInternal | null => {
        if (
          false ===
          ((input: any): input is ObjectInternal => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).id &&
              "string" === typeof (input as any).name
            );
          })(input)
        )
          return null;
        const result = p(input);
        return ((input: any): input is ObjectInternal => {
          return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).id &&
            "string" === typeof (input as any).name
          );
        })(result)
          ? result
          : null;
      },
  );
