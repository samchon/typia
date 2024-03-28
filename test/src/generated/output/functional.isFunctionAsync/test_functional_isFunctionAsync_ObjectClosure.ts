import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ObjectClosure } from "../../../structures/ObjectClosure";

export const test_functional_isFunctionAsync_ObjectClosure =
  _test_functional_isFunctionAsync("ObjectClosure")(ObjectClosure)(
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
        const result = await p(input);
        return ((input: any): input is ObjectClosure.IRecord => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.id && "function" === typeof input.open;
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
