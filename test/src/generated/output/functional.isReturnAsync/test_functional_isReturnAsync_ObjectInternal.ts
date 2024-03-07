import typia from "typia";
import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { ObjectInternal } from "../../../structures/ObjectInternal";
export const test_functional_isReturnAsync_ObjectInternal =
  _test_functional_isReturnAsync("ObjectInternal")(ObjectInternal)(
    (p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
      async (input: ObjectInternal): Promise<ObjectInternal | null> => {
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
