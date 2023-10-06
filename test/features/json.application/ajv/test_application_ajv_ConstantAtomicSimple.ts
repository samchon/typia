import typia from "typia"
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ConstantAtomicSimple = 
    _test_json_application("ajv")("ConstantAtomicSimple")(
        typia.json.application<[ConstantAtomicSimple], "ajv">(),
    );