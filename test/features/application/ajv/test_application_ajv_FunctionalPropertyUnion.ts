import typia from "../../../../src";
import { FunctionalPropertyUnion } from "../../../structures/FunctionalPropertyUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_FunctionalPropertyUnion = 
    _test_application("ajv")(
        "FunctionalPropertyUnion",
        typia.application<[FunctionalPropertyUnion], "ajv">(),
    );