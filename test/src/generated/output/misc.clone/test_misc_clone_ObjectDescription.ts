import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_misc_clone_ObjectDescription = _test_misc_clone(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)((input) =>
  ((input: ObjectDescription): import("typia").Resolved<ObjectDescription> => {
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
  })(input),
);
