import typia from "typia"
import { DynamicSimple } from "../../../structures/DynamicSimple";
import { _test_application } from "../../../internal/_test_application";

export const test_application_ajv_DynamicSimple = 
    _test_application("ajv")(
        "DynamicSimple",
        typia.application<[DynamicSimple], "ajv">(),
    );