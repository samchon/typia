import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_json_createStringify_TypeTagMatrix = _test_json_stringify(
  "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)((input: TypeTagMatrix): string => {
  const $string = (typia.json.createStringify as any).string;
  const $so0 = (input: any): any =>
    `{"matrix":${`[${input.matrix
      .map(
        (elem: any) => `[${elem.map((elem: any) => $string(elem)).join(",")}]`,
      )
      .join(",")}]`}}`;
  return $so0(input);
});
