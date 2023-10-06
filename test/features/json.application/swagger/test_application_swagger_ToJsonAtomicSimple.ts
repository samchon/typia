import typia from "typia"
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_ToJsonAtomicSimple = 
    _test_json_application("swagger")("ToJsonAtomicSimple")(
        typia.json.application<[ToJsonAtomicSimple], "swagger">(),
    );