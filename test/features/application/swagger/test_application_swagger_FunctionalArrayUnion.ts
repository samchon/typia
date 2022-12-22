import typia from "../../../../src";
import { FunctionalArrayUnion } from "../../../structures/FunctionalArrayUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_FunctionalArrayUnion = 
    _test_application("swagger")(
        "FunctionalArrayUnion",
        typia.application<[FunctionalArrayUnion], "swagger">(),
    );