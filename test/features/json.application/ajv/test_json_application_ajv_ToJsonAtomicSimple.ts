import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_json_application_ajv_ToJsonAtomicSimple =
    _test_json_application("ajv")("ToJsonAtomicSimple")(
        typia.json.application<[ToJsonAtomicSimple], "ajv">(),
    );
