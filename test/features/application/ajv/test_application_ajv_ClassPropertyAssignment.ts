import typia from "typia";

import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ClassPropertyAssignment = _test_application(
    "ajv",
)(
    "ClassPropertyAssignment",
    typia.application<[ClassPropertyAssignment], "ajv">(),
);
