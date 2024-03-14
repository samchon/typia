import typia from "typia";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ArraySimple } from "../../../structures/ArraySimple";
export const test_json_isStringify_ArraySimple = _test_json_isStringify(
  "ArraySimple",
)<ArraySimple>(ArraySimple)((input) =>
  ((input: ArraySimple): string | null => {
    const is = (input: any): input is ArraySimple => {
      const $io0 = (input: any): boolean =>
        "string" === typeof input.name &&
        "string" === typeof input.email &&
        Array.isArray(input.hobbies) &&
        input.hobbies.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io1(elem),
        );
      const $io1 = (input: any): boolean =>
        "string" === typeof input.name &&
        "string" === typeof input.body &&
        "number" === typeof input.rank &&
        Number.isFinite(input.rank);
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        )
      );
    };
    const stringify = (input: ArraySimple): string => {
      const $io1 = (input: any): boolean =>
        "string" === typeof input.name &&
        "string" === typeof input.body &&
        "number" === typeof input.rank;
      const $string = (typia.json.isStringify as any).string;
      const $number = (typia.json.isStringify as any).number;
      const $so0 = (input: any): any =>
        `{"name":${$string(input.name)},"email":${$string(input.email)},"hobbies":${`[${input.hobbies.map((elem: any) => `{"name":${$string((elem as any).name)},"body":${$string((elem as any).body)},"rank":${$number((elem as any).rank)}}`).join(",")}]`}}`;
      return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
    };
    return is(input) ? stringify(input) : null;
  })(input),
);
