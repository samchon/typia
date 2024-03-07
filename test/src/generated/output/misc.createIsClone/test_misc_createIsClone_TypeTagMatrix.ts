import typia from "typia";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";
export const test_misc_createIsClone_TypeTagMatrix = _test_misc_isClone(
  "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)(
  (input: any): import("typia").Resolved<TypeTagMatrix> | null => {
    const is = (input: any): input is TypeTagMatrix => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.matrix) &&
        3 <= input.matrix.length &&
        input.matrix.length <= 3 &&
        input.matrix.every(
          (elem: any) =>
            Array.isArray(elem) &&
            4 <= elem.length &&
            elem.length <= 4 &&
            elem.every(
              (elem: any) =>
                "string" === typeof elem &&
                /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                  elem,
                ),
            ),
        );
      return "object" === typeof input && null !== input && $io0(input);
    };
    const clone = (
      input: TypeTagMatrix,
    ): import("typia").Resolved<TypeTagMatrix> => {
      const $cp0 = (input: any) => input.map((elem: any) => elem as any);
      const $cp1 = (input: any) =>
        input.map((elem: any) =>
          Array.isArray(elem) ? $cp0(elem) : (elem as any),
        );
      const $co0 = (input: any): any => ({
        matrix: Array.isArray(input.matrix)
          ? $cp1(input.matrix)
          : (input.matrix as any),
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  },
);
