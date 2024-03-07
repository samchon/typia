import typia from "typia";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";
export const test_json_createIsParse_TypeTagMatrix = _test_json_isParse(
  "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)(
  (input: any): import("typia").Primitive<TypeTagMatrix> => {
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
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  },
);
