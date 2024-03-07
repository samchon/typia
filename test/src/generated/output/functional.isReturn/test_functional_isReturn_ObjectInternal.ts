import typia from "typia";
import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ObjectInternal } from "../../../structures/ObjectInternal";
export const test_functional_isReturn_ObjectInternal =
  _test_functional_isReturn("ObjectInternal")(ObjectInternal)(
    (p: (input: ObjectInternal) => ObjectInternal) =>
      (input: ObjectInternal): ObjectInternal | null => {
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
