import typia from "typia"
import { AtomicIntersection } from "../../../structures/AtomicIntersection";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_AtomicIntersection = 
    _test_json_application("swagger")("AtomicIntersection")(
        typia.json.application<[AtomicIntersection], "swagger">(),
    );