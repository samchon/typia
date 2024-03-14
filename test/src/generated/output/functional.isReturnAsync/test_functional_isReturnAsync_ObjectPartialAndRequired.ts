import typia from "typia";
import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";
export const test_functional_isReturnAsync_ObjectPartialAndRequired =
  _test_functional_isReturnAsync("ObjectPartialAndRequired")(
    ObjectPartialAndRequired,
  )(
    (
      p: (input: ObjectPartialAndRequired) => Promise<ObjectPartialAndRequired>,
    ) =>
      async (
        input: ObjectPartialAndRequired,
      ): Promise<ObjectPartialAndRequired | null> => {
        const result = await p(input);
        return ((input: any): input is ObjectPartialAndRequired => {
          const $io0 = (input: any): boolean =>
            (undefined === input.string || "string" === typeof input.string) &&
            (undefined === input.number ||
              ("number" === typeof input.number &&
                Number.isFinite(input.number))) &&
            (undefined === input.boolean ||
              "boolean" === typeof input.boolean) &&
            (null === input.object ||
              ("object" === typeof input.object &&
                null !== input.object &&
                $io0(input.object))) &&
            Array.isArray(input.array) &&
            input.array.every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            );
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
