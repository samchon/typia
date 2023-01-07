import typia from "../../../../src";
import { ClassMethod } from "../../../structures/ClassMethod";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ClassMethod = 
    _test_application("swagger")(
        "ClassMethod",
        typia.application<[ClassMethod], "swagger">(),
    );