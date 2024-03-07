import typia from "typia";
import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ArrayUnion } from "../../../structures/ArrayUnion";
export const test_functional_isParametersAsync_ArrayUnion =
  _test_functional_isParametersAsync("ArrayUnion")(ArrayUnion)(
    (p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
      async (input: ArrayUnion): Promise<ArrayUnion | null> => {
        if (
          false ===
          ((input: any): input is ArrayUnion => {
            const $ip0 = (input: any) => {
              const array = input;
              const top = input[0];
              if (0 === input.length) return true;
              const arrayPredicators = [
                [
                  (top: any[]): any => "boolean" === typeof top,
                  (entire: any[]): any =>
                    entire.every((elem: any) => "boolean" === typeof elem),
                ] as const,
                [
                  (top: any[]): any =>
                    "number" === typeof top && Number.isFinite(top),
                  (entire: any[]): any =>
                    entire.every(
                      (elem: any) =>
                        "number" === typeof elem && Number.isFinite(elem),
                    ),
                ] as const,
                [
                  (top: any[]): any => "string" === typeof top,
                  (entire: any[]): any =>
                    entire.every((elem: any) => "string" === typeof elem),
                ] as const,
              ];
              const passed = arrayPredicators.filter((pred: any) =>
                pred[0](top),
              );
              if (1 === passed.length) return passed[0]![1](array);
              else if (1 < passed.length)
                for (const pred of passed)
                  if (array.every((value: any) => true === pred[0](value)))
                    return pred[1](array);
              return false;
            };
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) => Array.isArray(elem) && ($ip0(elem) || false),
              )
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
