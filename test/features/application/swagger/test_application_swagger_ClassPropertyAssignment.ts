import typia from "../../../../src";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ClassPropertyAssignment =
    _test_application("swagger")(
        "ClassPropertyAssignment",
        typia.application<[ClassPropertyAssignment], "swagger">(),
    );
