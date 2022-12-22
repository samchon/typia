import typia from "../../../../src";
import { FunctionalTuple } from "../../../structures/FunctionalTuple";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_FunctionalTuple = 
    _test_application("ajv")(
        "FunctionalTuple",
        typia.application<[FunctionalTuple], "ajv">(),
    );