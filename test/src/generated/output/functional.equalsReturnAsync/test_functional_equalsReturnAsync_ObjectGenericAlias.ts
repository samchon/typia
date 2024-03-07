import typia from "typia";
import { _test_functional_equalsReturnAsync } from "../../../internal/_test_functional_equalsReturnAsync";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
export const test_functional_equalsReturnAsync_ObjectGenericAlias =
  _test_functional_equalsReturnAsync("ObjectGenericAlias")(ObjectGenericAlias)(
    (p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
      async (input: ObjectGenericAlias): Promise<ObjectGenericAlias | null> => {
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ObjectGenericAlias.Alias => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.value &&
            (1 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["value"].some((prop: any) => key === prop)) return true;
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
