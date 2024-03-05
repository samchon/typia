import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_misc_createClone_ClassPropertyAssignment = _test_misc_clone(
  "ClassPropertyAssignment",
)<ClassPropertyAssignment>(ClassPropertyAssignment)(
  (
    input: ClassPropertyAssignment,
  ): import("typia").Resolved<ClassPropertyAssignment> => {
    const $co0 = (input: any): any => ({
      id: input.id as any,
      name: input.name as any,
      note: input.note as any,
      editable: input.editable as any,
      incremental: input.incremental as any,
    });
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  },
);
