import typia from "../../../../src";
import { DynamicUnion } from "../../../structures/DynamicUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_DynamicUnion = 
    _test_application("swagger")(
        "DynamicUnion",
        typia.application<[DynamicUnion], "swagger">(),
    );