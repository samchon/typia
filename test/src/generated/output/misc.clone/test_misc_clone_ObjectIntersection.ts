import typia from "typia";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
export const test_misc_clone_ObjectIntersection = _test_misc_clone(
  "ObjectIntersection",
)<ObjectIntersection>(ObjectIntersection)((input) =>
  ((
    input: ObjectIntersection,
  ): import("typia").Resolved<ObjectIntersection> => {
    const $co0 = (input: any): any => ({
      email: input.email as any,
      name: input.name as any,
      vulnerable: input.vulnerable as any,
    });
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  })(input),
);
