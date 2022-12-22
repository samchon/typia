import typia from "../../../../src";
import { FunctionalArray } from "../../../structures/FunctionalArray";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_FunctionalArray = 
    _test_application("swagger")(
        "FunctionalArray",
        typia.application<[FunctionalArray], "swagger">(),
    );