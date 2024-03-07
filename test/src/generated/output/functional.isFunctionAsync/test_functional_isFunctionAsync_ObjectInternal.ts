import typia from "typia";
import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ObjectInternal } from "../../../structures/ObjectInternal";
export const test_functional_isFunctionAsync_ObjectInternal =
  _test_functional_isFunctionAsync("ObjectInternal")(ObjectInternal)(
    (p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
      async (input: ObjectInternal): Promise<ObjectInternal | null> => {
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
        const result = await p(input);
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
