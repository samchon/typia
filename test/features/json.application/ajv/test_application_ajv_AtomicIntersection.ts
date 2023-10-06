import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_json_application_ajv_AtomicIntersection =
    _test_json_application("ajv")("AtomicIntersection")(
        typia.json.application<[AtomicIntersection], "ajv">(),
    );
