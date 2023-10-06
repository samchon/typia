import typia from "typia"
import { AtomicClass } from "../../../structures/AtomicClass";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_AtomicClass = 
    _test_json_application("swagger")("AtomicClass")(
        typia.json.application<[AtomicClass], "swagger">(),
    );