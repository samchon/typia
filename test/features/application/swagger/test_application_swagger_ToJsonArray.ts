import typia from "../../../../src";
import { ToJsonArray } from "../../../structures/ToJsonArray";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ToJsonArray = 
    _test_application("swagger")(
        "ToJsonArray",
        typia.application<[ToJsonArray], "swagger">(),
    );