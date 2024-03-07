import typia from "typia";
import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { ObjectInternal } from "../../../structures/ObjectInternal";
export const test_functional_isParameters_ObjectInternal =
  _test_functional_isParameters("ObjectInternal")(ObjectInternal)(
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
        return p(input);
      },
  );
