import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_json_createIsStringify_TypeTagMatrix = _test_json_isStringify(
  "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)((input: TypeTagMatrix): string | null => {
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
              /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                elem,
              ),
          ),
      );
    return "object" === typeof input && null !== input && $io0(input);
  };
  const stringify = (input: TypeTagMatrix): string => {
    const $string = require("typia/lib/functional/$string").$string;
    const $so0 = (input: any): any =>
      `{"matrix":${`[${input.matrix
        .map(
          (elem: any) =>
            `[${elem.map((elem: any) => $string(elem)).join(",")}]`,
        )
        .join(",")}]`}}`;
    return $so0(input);
  };
  return is(input) ? stringify(input) : null;
});
