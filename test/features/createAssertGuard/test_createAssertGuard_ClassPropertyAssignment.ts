import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_createAssertGuard_ClassPropertyAssignment = _test_assertGuard(
  "ClassPropertyAssignment",
)<ClassPropertyAssignment>(ClassPropertyAssignment)(
  typia.createAssertGuard<ClassPropertyAssignment>(),
);
