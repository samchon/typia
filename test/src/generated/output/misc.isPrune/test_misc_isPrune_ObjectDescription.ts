import typia from "typia";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ObjectDescription } from "../../../structures/ObjectDescription";
export const test_misc_isPrune_ObjectDescription = _test_misc_isPrune(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)((input) =>
  ((input: any): input is ObjectDescription => {
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
    const prune = (input: ObjectDescription): void => {
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if (
            "id" === key ||
            "deprecated" === key ||
            "title" === key ||
            "descriptions" === key ||
            "newLine" === key
          )
            continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
  })(input),
);
