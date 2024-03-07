import typia from "typia";
import { _test_functional_equalsReturnAsync } from "../../../internal/_test_functional_equalsReturnAsync";
import { ArraySimple } from "../../../structures/ArraySimple";
export const test_functional_equalsReturnAsync_ArraySimple =
  _test_functional_equalsReturnAsync("ArraySimple")(ArraySimple)(
    (p: (input: ArraySimple) => Promise<ArraySimple>) =>
      async (input: ArraySimple): Promise<ArraySimple | null> => {
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ArraySimple => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.name &&
            "string" === typeof input.email &&
            Array.isArray(input.hobbies) &&
            input.hobbies.every(
              (elem: any, _index2: number) =>
                "object" === typeof elem &&
                null !== elem &&
                $io1(elem, true && _exceptionable),
            ) &&
            (3 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (
                  ["name", "email", "hobbies"].some((prop: any) => key === prop)
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.name &&
            "string" === typeof input.body &&
            "number" === typeof input.rank &&
            Number.isFinite(input.rank) &&
            (3 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["name", "body", "rank"].some((prop: any) => key === prop))
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
