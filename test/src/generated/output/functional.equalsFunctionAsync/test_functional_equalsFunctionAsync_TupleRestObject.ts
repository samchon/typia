import typia from "typia";
import { _test_functional_equalsFunctionAsync } from "../../../internal/_test_functional_equalsFunctionAsync";
import { TupleRestObject } from "../../../structures/TupleRestObject";
export const test_functional_equalsFunctionAsync_TupleRestObject =
  _test_functional_equalsFunctionAsync("TupleRestObject")(TupleRestObject)(
    (p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
      async (input: TupleRestObject): Promise<TupleRestObject | null> => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is TupleRestObject => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "string" === typeof input.value &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["value"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              Array.isArray(input) &&
              "boolean" === typeof input[0] &&
              "number" === typeof input[1] &&
              Number.isFinite(input[1]) &&
              Array.isArray(input.slice(2)) &&
              input
                .slice(2)
                .every(
                  (elem: any, _index1: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io0(elem, true),
                )
            );
          })(input)
        )
          return null;
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is TupleRestObject => {
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
            Array.isArray(input) &&
            "boolean" === typeof input[0] &&
            "number" === typeof input[1] &&
            Number.isFinite(input[1]) &&
            Array.isArray(input.slice(2)) &&
            input
              .slice(2)
              .every(
                (elem: any, _index1: number) =>
                  "object" === typeof elem && null !== elem && $io0(elem, true),
              )
          );
        })(result)
          ? result
          : null;
      },
  );
