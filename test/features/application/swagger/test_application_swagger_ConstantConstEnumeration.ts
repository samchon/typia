import typia from "typia"
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
import { _test_application } from "../../../internal/_test_application";

export const test_application_swagger_ConstantConstEnumeration = 
    _test_application("swagger")(
        "ConstantConstEnumeration",
        typia.application<[ConstantConstEnumeration], "swagger">(),
    );