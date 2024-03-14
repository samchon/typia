import typia from "typia";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ClassGetter } from "../../../structures/ClassGetter";
export const test_json_createStringify_ClassGetter = _test_json_stringify(
  "ClassGetter",
)<ClassGetter>(ClassGetter)((input: ClassGetter): string => {
  const $string = (typia.json.createStringify as any).string;
  const $so0 = (input: any): any =>
    `{"id":${$string(input.id)},"name":${$string(input.name)},"dead":${null !== input.dead ? input.dead : "null"}}`;
  return $so0(input);
});
