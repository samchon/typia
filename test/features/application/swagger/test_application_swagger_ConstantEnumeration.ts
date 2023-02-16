import typia from "typia"
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ConstantEnumeration = 
    _test_application("swagger")(
        "ConstantEnumeration",
        typia.application<[ConstantEnumeration], "swagger">(),
    );