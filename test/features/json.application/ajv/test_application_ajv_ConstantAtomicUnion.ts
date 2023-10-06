import typia from "typia"
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ConstantAtomicUnion = 
    _test_json_application("ajv")("ConstantAtomicUnion")(
        typia.json.application<[ConstantAtomicUnion], "ajv">(),
    );