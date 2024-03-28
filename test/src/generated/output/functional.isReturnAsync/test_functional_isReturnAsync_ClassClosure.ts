import typia from "typia";

import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { ClassClosure } from "../../../structures/ClassClosure";

export const test_functional_isReturnAsync_ClassClosure =
  _test_functional_isReturnAsync("ClassClosure")(ClassClosure)(
    (p: (input: ClassClosure) => Promise<ClassClosure>) =>
      async (input: ClassClosure): Promise<ClassClosure | null> => {
        const result = await p(input);
        return ((input: any): input is ClassClosure.Something => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            "something" === input.type &&
            "function" === typeof input.closure;
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
