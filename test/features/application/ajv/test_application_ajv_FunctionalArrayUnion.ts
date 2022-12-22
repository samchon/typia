import typia from "../../../../src";
import { FunctionalArrayUnion } from "../../../structures/FunctionalArrayUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_FunctionalArrayUnion = 
    _test_application("ajv")(
        "FunctionalArrayUnion",
        typia.application<[FunctionalArrayUnion], "ajv">(),
    );