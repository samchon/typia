import typia from "typia";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";
export const test_misc_createClone_ObjectJsonTag = _test_misc_clone(
  "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)(
  (input: ObjectJsonTag): import("typia").Resolved<ObjectJsonTag> => {
    const $co0 = (input: any): any => ({
      vulnerable: input.vulnerable as any,
      description: input.description as any,
      title: input.title as any,
      complicate_title: input.complicate_title as any,
    });
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  },
);
