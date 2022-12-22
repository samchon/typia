import typia from "../../../../src";
import { DynamicUnion } from "../../../structures/DynamicUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_DynamicUnion = _test_application("ajv")(
    "DynamicUnion",
    typia.application<[DynamicUnion], "ajv">(),
);
