import typia from "typia";

import { TagLength } from "../../../structures/TagLength";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_TagLength = _test_application("ajv")(
    "TagLength",
    typia.application<[TagLength], "ajv">(),
);
