import typia from "typia";
import { _test_functional_equalsReturnAsync } from "../../../internal/_test_functional_equalsReturnAsync";
import { ClassClosure } from "../../../structures/ClassClosure";
export const test_functional_equalsReturnAsync_ClassClosure =
  _test_functional_equalsReturnAsync("ClassClosure")(ClassClosure)(
    (p: (input: ClassClosure) => Promise<ClassClosure>) =>
      async (input: ClassClosure): Promise<ClassClosure | null> => {
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ClassClosure.Something => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.id &&
            "something" === input.type &&
            "function" === typeof input.closure &&
            (3 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["id", "type", "closure"].some((prop: any) => key === prop))
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
