import typia from "typia";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TypeTagTuple } from "../../../structures/TypeTagTuple";
export const test_json_createStringify_TypeTagTuple = _test_json_stringify(
  "TypeTagTuple",
)<TypeTagTuple>(TypeTagTuple)((input: TypeTagTuple): string => {
  const $string = (typia.json.createStringify as any).string;
  const $number = (typia.json.createStringify as any).number;
  const $so0 = (input: any): any =>
    `{"tuple":${`[${$string(input.tuple[0])},${$number(input.tuple[1])},${`[${input.tuple[2].map((elem: any) => $string(elem)).join(",")}]`},${`[${input.tuple[3].map((elem: any) => $number(elem)).join(",")}]`}]`}}`;
  return $so0(input);
});
