import typia from "typia";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";
export const test_json_isStringify_ArrayAtomicSimple = _test_json_isStringify(
  "ArrayAtomicSimple",
)<ArrayAtomicSimple>(ArrayAtomicSimple)((input) =>
  ((input: ArrayAtomicSimple): string | null => {
    const is = (input: any): input is ArrayAtomicSimple => {
      return (
        Array.isArray(input) &&
        input.length === 3 &&
        Array.isArray(input[0]) &&
        input[0].every((elem: any) => "boolean" === typeof elem) &&
        Array.isArray(input[1]) &&
        input[1].every(
          (elem: any) => "number" === typeof elem && Number.isFinite(elem),
        ) &&
        Array.isArray(input[2]) &&
        input[2].every((elem: any) => "string" === typeof elem)
      );
    };
    const stringify = (input: ArrayAtomicSimple): string => {
      const $number = (typia.json.isStringify as any).number;
      const $string = (typia.json.isStringify as any).string;
      return `[${`[${input[0].map((elem: any) => elem).join(",")}]`},${`[${input[1].map((elem: any) => $number(elem)).join(",")}]`},${`[${input[2].map((elem: any) => $string(elem)).join(",")}]`}]`;
    };
    return is(input) ? stringify(input) : null;
  })(input),
);
