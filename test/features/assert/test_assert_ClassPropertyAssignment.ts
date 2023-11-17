import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_assert_ClassPropertyAssignment = _test_assert(
  "ClassPropertyAssignment",
)<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
  typia.assert<ClassPropertyAssignment>(input),
);
