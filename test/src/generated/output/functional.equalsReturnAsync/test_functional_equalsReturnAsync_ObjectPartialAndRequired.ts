import typia from "typia";
import { _test_functional_equalsReturnAsync } from "../../../internal/_test_functional_equalsReturnAsync";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";
export const test_functional_equalsReturnAsync_ObjectPartialAndRequired =
  _test_functional_equalsReturnAsync("ObjectPartialAndRequired")(
    ObjectPartialAndRequired,
  )(
    (
        p: (
          input: ObjectPartialAndRequired,
        ) => Promise<ObjectPartialAndRequired>,
      ) =>
      async (
        input: ObjectPartialAndRequired,
      ): Promise<ObjectPartialAndRequired | null> => {
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ObjectPartialAndRequired => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            (undefined === input.string || "string" === typeof input.string) &&
            (undefined === input.number ||
              ("number" === typeof input.number &&
                Number.isFinite(input.number))) &&
            (undefined === input.boolean ||
              "boolean" === typeof input.boolean) &&
            (null === input.object ||
              ("object" === typeof input.object &&
                null !== input.object &&
                $io0(input.object, true && _exceptionable))) &&
            Array.isArray(input.array) &&
            input.array.every(
              (elem: any, _index1: number) =>
                "number" === typeof elem && Number.isFinite(elem),
            ) &&
            (2 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (
                  ["string", "number", "boolean", "object", "array"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          return (
            "object" === typeof input && null !== input && $io0(input, true)
          );
        })(result)
          ? result
          : null;
      },
  );
