import typia from "typia";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";
export const test_json_stringify_ConstantAtomicAbsorbed = _test_json_stringify(
  "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)((input) =>
  ((input: ConstantAtomicAbsorbed): string => {
    const $string = (typia.json.stringify as any).string;
    const $number = (typia.json.stringify as any).number;
    return `{"id":${$string((input as any).id)},"age":${$number(
      (input as any).age,
    )}}`;
  })(input),
);
