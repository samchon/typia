import typia from "typia";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ClassPropertyAssignment = 
  _test_reflect_metadata("ClassPropertyAssignment")(
    typia.reflect.metadata<[ClassPropertyAssignment]>()
  );