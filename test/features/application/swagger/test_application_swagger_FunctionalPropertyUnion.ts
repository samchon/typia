import typia from "../../../../src";
import { FunctionalPropertyUnion } from "../../../structures/FunctionalPropertyUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_FunctionalPropertyUnion = 
    _test_application("swagger")(
        "FunctionalPropertyUnion",
        typia.application<[FunctionalPropertyUnion], "swagger">(),
    );