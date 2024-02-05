import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_misc_createIsClone_ObjectDescription = _test_misc_isClone(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)(
  (input: any): typia.Resolved<ObjectDescription> | null => {
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
    const clone = (
      input: ObjectDescription,
    ): typia.Resolved<ObjectDescription> => {
      const $cp0 = (input: any) => input.map((elem: any) => elem as any);
      const $co0 = (input: any): any => ({
        id: input.id as any,
        deprecated: input.deprecated as any,
        title: input.title as any,
        descriptions: Array.isArray(input.descriptions)
          ? $cp0(input.descriptions)
          : (input.descriptions as any),
        newLine: input.newLine as any,
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  },
);
