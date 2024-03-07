import typia from "typia";
import { _test_functional_equalsFunction } from "../../../internal/_test_functional_equalsFunction";
import { ObjectClosure } from "../../../structures/ObjectClosure";
export const test_functional_equalsFunction_ObjectClosure =
  _test_functional_equalsFunction("ObjectClosure")(ObjectClosure)(
    (p: (input: ObjectClosure) => ObjectClosure) =>
      (input: ObjectClosure): ObjectClosure | null => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectClosure.IRecord => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
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
          })(input)
        )
          return null;
        const result = p(input);
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
