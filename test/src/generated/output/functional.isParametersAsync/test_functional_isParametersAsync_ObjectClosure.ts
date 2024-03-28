import typia from "typia";

import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ObjectClosure } from "../../../structures/ObjectClosure";

export const test_functional_isParametersAsync_ObjectClosure =
  _test_functional_isParametersAsync("ObjectClosure")(ObjectClosure)(
    (p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
      async (input: ObjectClosure): Promise<ObjectClosure | null> => {
        if (
          false ===
          ((input: any): input is ObjectClosure.IRecord => {
            const $io0 = (input: any): boolean =>
              "string" === typeof input.id && "function" === typeof input.open;
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        return p(input);
      },
  );
