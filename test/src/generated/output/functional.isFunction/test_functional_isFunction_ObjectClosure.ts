import typia from "typia";
import { _test_functional_isFunction } from "../../../internal/_test_functional_isFunction";
import { ObjectClosure } from "../../../structures/ObjectClosure";
export const test_functional_isFunction_ObjectClosure =
  _test_functional_isFunction("ObjectClosure")(ObjectClosure)(
    (p: (input: ObjectClosure) => ObjectClosure) =>
      (input: ObjectClosure): ObjectClosure | null => {
        if (
          false ===
          ((input: any): input is ObjectClosure.IRecord => {
            const $io0 = (input: any): boolean =>
              "string" === typeof input.id && "function" === typeof input.open;
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        const result = p(input);
        return ((input: any): input is ObjectClosure.IRecord => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.id && "function" === typeof input.open;
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
