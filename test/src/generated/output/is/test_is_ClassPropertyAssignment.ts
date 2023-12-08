import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_is_ClassPropertyAssignment = _test_is(
  "ClassPropertyAssignment",
)<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
  ((input: any): input is ClassPropertyAssignment => {
    const $io0 = (input: any): boolean =>
      "number" === typeof input.id &&
      Number.isFinite(input.id) &&
      "string" === typeof input.name &&
      "assignment" === input.note &&
      false === input.editable &&
      "boolean" === typeof input.incremental;
    return "object" === typeof input && null !== input && $io0(input);
  })(input),
);
