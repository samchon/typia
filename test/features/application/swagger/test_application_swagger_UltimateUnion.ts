import typia from "../../../../src";
import { UltimateUnion } from "../../../structures/UltimateUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_UltimateUnion = 
    _test_application("swagger")(
        "UltimateUnion",
        typia.application<[UltimateUnion], "swagger">(),
    );