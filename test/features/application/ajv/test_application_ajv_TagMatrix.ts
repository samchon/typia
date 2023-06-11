import typia from "typia"
import { TagMatrix } from "../../../structures/TagMatrix";
import { _test_application } from "../../../internal/_test_application";

export const test_application_ajv_TagMatrix = 
    _test_application("ajv")(
        "TagMatrix",
        typia.application<[TagMatrix], "ajv">(),
    );