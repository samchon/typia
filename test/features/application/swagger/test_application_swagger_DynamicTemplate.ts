import typia from "../../../../src";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_DynamicTemplate = 
    _test_application("swagger")(
        "DynamicTemplate",
        typia.application<[DynamicTemplate], "swagger">(),
    );