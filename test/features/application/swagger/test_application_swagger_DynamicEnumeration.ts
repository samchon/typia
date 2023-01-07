import typia from "../../../../src";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_DynamicEnumeration = 
    _test_application("swagger")(
        "DynamicEnumeration",
        typia.application<[DynamicEnumeration], "swagger">(),
    );