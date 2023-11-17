import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_json_application_swagger_ClassPropertyAssignment =
  _test_json_application("swagger")("ClassPropertyAssignment")(
    typia.json.application<[ClassPropertyAssignment], "swagger">(),
  );
