import typia from "../../../../src";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ToJsonAtomicUnion = 
    _test_application("ajv")(
        "ToJsonAtomicUnion",
        typia.application<[ToJsonAtomicUnion], "ajv">(),
    );