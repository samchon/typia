import typia from "../../../../src";
import { FunctionalObjectUnion } from "../../../structures/FunctionalObjectUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_FunctionalObjectUnion = 
    _test_application("swagger")(
        "FunctionalObjectUnion",
        typia.application<[FunctionalObjectUnion], "swagger">(),
    );