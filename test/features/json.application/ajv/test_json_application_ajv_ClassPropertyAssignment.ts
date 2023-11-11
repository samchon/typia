import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_json_application_ajv_ClassPropertyAssignment =
    _test_json_application("ajv")("ClassPropertyAssignment")(
        typia.json.application<[ClassPropertyAssignment], "ajv">(),
    );
