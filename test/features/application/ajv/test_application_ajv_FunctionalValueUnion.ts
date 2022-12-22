import typia from "../../../../src";
import { FunctionalValueUnion } from "../../../structures/FunctionalValueUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_FunctionalValueUnion = 
    _test_application("ajv")(
        "FunctionalValueUnion",
        typia.application<[FunctionalValueUnion], "ajv">(),
    );