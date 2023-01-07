import typia from "../../../../src";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ConstantEnumeration = 
    _test_application("ajv")(
        "ConstantEnumeration",
        typia.application<[ConstantEnumeration], "ajv">(),
    );