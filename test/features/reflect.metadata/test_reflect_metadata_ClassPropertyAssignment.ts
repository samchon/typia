import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_reflect_metadata_ClassPropertyAssignment =
  _test_reflect_metadata("ClassPropertyAssignment")(
    typia.reflect.metadata<[ClassPropertyAssignment]>(),
  );
