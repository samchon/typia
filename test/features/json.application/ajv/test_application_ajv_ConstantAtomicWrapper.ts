import typia from "typia"
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ConstantAtomicWrapper = 
    _test_json_application("ajv")("ConstantAtomicWrapper")(
        typia.json.application<[ConstantAtomicWrapper], "ajv">(),
    );