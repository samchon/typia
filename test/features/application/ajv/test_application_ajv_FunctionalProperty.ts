import typia from "../../../../src";
import { FunctionalProperty } from "../../../structures/FunctionalProperty";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_FunctionalProperty = 
    _test_application("ajv")(
        "FunctionalProperty",
        typia.application<[FunctionalProperty], "ajv">(),
    );