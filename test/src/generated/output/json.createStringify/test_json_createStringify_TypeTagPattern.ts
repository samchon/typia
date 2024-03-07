import typia from "typia";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";
export const test_json_createStringify_TypeTagPattern = _test_json_stringify(
  "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)((input: TypeTagPattern): string => {
  const $string = (typia.json.createStringify as any).string;
  return `{"uuid":${$string((input as any).uuid)},"email":${$string(
    (input as any).email,
  )},"ipv4":${$string((input as any).ipv4)},"ipv6":${$string(
    (input as any).ipv6,
  )}}`;
});
