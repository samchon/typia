import typia from "../../../../src";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ConstantConstEnumeration = 
    _test_application("ajv")(
        "ConstantConstEnumeration",
        typia.application<[ConstantConstEnumeration], "ajv">(),
    );