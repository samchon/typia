import typia from "typia";
import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ClassClosure } from "../../../structures/ClassClosure";
export const test_functional_isParametersAsync_ClassClosure =
  _test_functional_isParametersAsync("ClassClosure")(ClassClosure)(
    (p: (input: ClassClosure) => Promise<ClassClosure>) =>
      async (input: ClassClosure): Promise<ClassClosure | null> => {
        if (
          false ===
          ((input: any): input is ClassClosure.Something => {
            const $io0 = (input: any): boolean =>
              "string" === typeof input.id &&
              "something" === input.type &&
              "function" === typeof input.closure;
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        return p(input);
      },
  );
