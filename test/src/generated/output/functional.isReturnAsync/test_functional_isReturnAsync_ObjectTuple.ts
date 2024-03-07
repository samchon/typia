import typia from "typia";
import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { ObjectTuple } from "../../../structures/ObjectTuple";
export const test_functional_isReturnAsync_ObjectTuple =
  _test_functional_isReturnAsync("ObjectTuple")(ObjectTuple)(
    (p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
      async (input: ObjectTuple): Promise<ObjectTuple | null> => {
        const result = await p(input);
        return ((input: any): input is ObjectTuple => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.code &&
            "string" === typeof input.name;
          const $io1 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.mobile &&
            "string" === typeof input.name;
          return (
            Array.isArray(input) &&
            input.length === 2 &&
            "object" === typeof input[0] &&
            null !== input[0] &&
            $io0(input[0]) &&
            "object" === typeof input[1] &&
            null !== input[1] &&
            $io1(input[1])
          );
        })(result)
          ? result
          : null;
      },
  );
