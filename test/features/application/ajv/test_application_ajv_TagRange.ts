import typia from "typia";

import { TagRange } from "../../../structures/TagRange";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_TagRange = _test_application("ajv")(
    "TagRange",
    typia.application<[TagRange], "ajv">(),
);
