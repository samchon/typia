import typia from "typia";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ObjectDescription } from "../../../structures/ObjectDescription";
export const test_json_isParse_ObjectDescription = _test_json_isParse(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)((input) =>
  ((input: any): import("typia").Primitive<ObjectDescription> => {
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
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  })(input),
);
