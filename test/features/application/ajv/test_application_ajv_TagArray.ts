import typia from "typia"
import { TagArray } from "../../../structures/TagArray";
import { _test_application } from "../../../internal/_test_application";

export const test_application_ajv_TagArray = 
    _test_application("ajv")(
        "TagArray",
        typia.application<[TagArray], "ajv">(),
    );