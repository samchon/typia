import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_json_validateParse_ClassPropertyAssignment =
    _test_json_validateParse(
        "ClassPropertyAssignment",
    )<ClassPropertyAssignment>(ClassPropertyAssignment)(
        typia.json.createValidateParse<ClassPropertyAssignment>(),
    );
