import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_misc_createClone_ObjectGenericAlias = _test_misc_clone(
  "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)(
  (input: ObjectGenericAlias): import("typia").Resolved<ObjectGenericAlias> => {
    const $co0 = (input: any): any => ({
      value: input.value as any,
    });
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  },
);
