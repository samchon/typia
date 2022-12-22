import typia from "../../../../src";
import { FunctionalTuple } from "../../../structures/FunctionalTuple";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_FunctionalTuple = 
    _test_application("swagger")(
        "FunctionalTuple",
        typia.application<[FunctionalTuple], "swagger">(),
    );