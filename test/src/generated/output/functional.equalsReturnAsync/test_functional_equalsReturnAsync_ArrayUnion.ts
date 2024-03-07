import typia from "typia";
import { _test_functional_equalsReturnAsync } from "../../../internal/_test_functional_equalsReturnAsync";
import { ArrayUnion } from "../../../structures/ArrayUnion";
export const test_functional_equalsReturnAsync_ArrayUnion =
  _test_functional_equalsReturnAsync("ArrayUnion")(ArrayUnion)(
    (p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
      async (input: ArrayUnion): Promise<ArrayUnion | null> => {
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ArrayUnion => {
          const $ip0 = (input: any, _exceptionable: boolean = true) => {
            const array = input;
            const top = input[0];
            if (0 === input.length) return true;
            const arrayPredicators = [
              [
                (top: any[]): any => "boolean" === typeof top,
                (entire: any[]): any =>
                  entire.every(
                    (elem: any, _index5: number) => "boolean" === typeof elem,
                  ),
              ] as const,
              [
                (top: any[]): any =>
                  "number" === typeof top && Number.isFinite(top),
                (entire: any[]): any =>
                  entire.every(
                    (elem: any, _index6: number) =>
                      "number" === typeof elem && Number.isFinite(elem),
                  ),
              ] as const,
              [
                (top: any[]): any => "string" === typeof top,
                (entire: any[]): any =>
                  entire.every(
                    (elem: any, _index7: number) => "string" === typeof elem,
                  ),
              ] as const,
            ];
            const passed = arrayPredicators.filter((pred: any) => pred[0](top));
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
              (elem: any, _index1: number) =>
                Array.isArray(elem) &&
                ($ip0(elem, true && _exceptionable) || false),
            )
          );
        })(result)
          ? result
          : null;
      },
  );
