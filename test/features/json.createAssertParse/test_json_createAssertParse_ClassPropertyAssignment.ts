import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_json_createAssertParse_ClassPropertyAssignment =
  _test_json_assertParse("ClassPropertyAssignment")<ClassPropertyAssignment>(
    ClassPropertyAssignment,
  )(typia.json.createAssertParse<ClassPropertyAssignment>());
