import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../../internal/_test_functional_equalsReturnAsync";
import { ObjectClosure } from "../../../structures/ObjectClosure";

export const test_functional_equalsReturnAsync_ObjectClosure =
  _test_functional_equalsReturnAsync("ObjectClosure")(ObjectClosure)(
    (p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
      async (input: ObjectClosure): Promise<ObjectClosure | null> => {
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ObjectClosure.IRecord => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.id &&
            "function" === typeof input.open &&
            (2 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["id", "open"].some((prop: any) => key === prop))
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
