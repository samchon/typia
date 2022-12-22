import typia from "../../../../src";
import { FunctionalProperty } from "../../../structures/FunctionalProperty";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_FunctionalProperty = 
    _test_application("swagger")(
        "FunctionalProperty",
        typia.application<[FunctionalProperty], "swagger">(),
    );