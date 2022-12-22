import typia from "../../../../src";
import { FunctionalTupleUnion } from "../../../structures/FunctionalTupleUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_FunctionalTupleUnion = 
    _test_application("ajv")(
        "FunctionalTupleUnion",
        typia.application<[FunctionalTupleUnion], "ajv">(),
    );