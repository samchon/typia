import typia from "typia";
import { _test_functional_equalsReturnAsync } from "../../../internal/_test_functional_equalsReturnAsync";
import { ObjectAlias } from "../../../structures/ObjectAlias";
export const test_functional_equalsReturnAsync_ObjectAlias =
  _test_functional_equalsReturnAsync("ObjectAlias")(ObjectAlias)(
    (p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
      async (input: ObjectAlias): Promise<ObjectAlias | null> => {
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ObjectAlias => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            (null === input.id || "string" === typeof input.id) &&
            "string" === typeof input.email &&
            "string" === typeof input.name &&
            (null === input.sex ||
              1 === input.sex ||
              2 === input.sex ||
              "female" === input.sex ||
              "male" === input.sex) &&
            (null === input.age ||
              ("number" === typeof input.age && Number.isFinite(input.age))) &&
            (null === input.dead || "boolean" === typeof input.dead) &&
            (6 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (
                  ["id", "email", "name", "sex", "age", "dead"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any, _index1: number) =>
                "object" === typeof elem && null !== elem && $io0(elem, true),
            )
          );
        })(result)
          ? result
          : null;
      },
  );
