import typia from "typia";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";
export const test_json_isStringify_ConstantAtomicAbsorbed =
  _test_json_isStringify("ConstantAtomicAbsorbed")<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed,
  )((input) =>
    ((input: ConstantAtomicAbsorbed): string | null => {
      const is = (input: any): input is ConstantAtomicAbsorbed => {
        return (
          "object" === typeof input &&
          null !== input &&
          "string" === typeof (input as any).id &&
          "number" === typeof (input as any).age &&
          Number.isFinite((input as any).age)
        );
      };
      const stringify = (input: ConstantAtomicAbsorbed): string => {
        const $string = (typia.json.isStringify as any).string;
        const $number = (typia.json.isStringify as any).number;
        return `{"id":${$string((input as any).id)},"age":${$number((input as any).age)}}`;
      };
      return is(input) ? stringify(input) : null;
    })(input),
  );
