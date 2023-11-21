import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_createIs_ClassPropertyAssignment = _test_is(
  "ClassPropertyAssignment",
)<ClassPropertyAssignment>(ClassPropertyAssignment)(
  typia.createIs<ClassPropertyAssignment>(),
);
