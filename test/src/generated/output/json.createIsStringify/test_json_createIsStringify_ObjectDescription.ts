import typia from "typia";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectDescription } from "../../../structures/ObjectDescription";
export const test_json_createIsStringify_ObjectDescription =
  _test_json_isStringify("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )((input: ObjectDescription): string | null => {
    const is = (input: any): input is ObjectDescription => {
      const $io0 = (input: any): boolean =>
        "string" === typeof input.id &&
        /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
          input.id,
        ) &&
        "boolean" === typeof input.deprecated &&
        "string" === typeof input.title &&
        Array.isArray(input.descriptions) &&
        input.descriptions.every((elem: any) => "string" === typeof elem) &&
        "number" === typeof input.newLine &&
        Number.isFinite(input.newLine);
      return "object" === typeof input && null !== input && $io0(input);
    };
    const stringify = (input: ObjectDescription): string => {
      const $string = (typia.json.createIsStringify as any).string;
      const $number = (typia.json.createIsStringify as any).number;
      const $so0 = (input: any): any =>
        `{"id":${$string(input.id)},"deprecated":${input.deprecated},"title":${$string(input.title)},"descriptions":${`[${input.descriptions.map((elem: any) => $string(elem)).join(",")}]`},"newLine":${$number(input.newLine)}}`;
      return $so0(input);
    };
    return is(input) ? stringify(input) : null;
  });
