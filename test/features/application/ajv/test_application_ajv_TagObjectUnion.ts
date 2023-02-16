import typia from "typia"
import { TagObjectUnion } from "../../../structures/TagObjectUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_TagObjectUnion = 
    _test_application("ajv")(
        "TagObjectUnion",
        typia.application<[TagObjectUnion], "ajv">(),
    );