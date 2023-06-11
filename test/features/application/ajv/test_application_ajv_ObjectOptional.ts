import typia from "typia"
import { ObjectOptional } from "../../../structures/ObjectOptional";
import { _test_application } from "../../../internal/_test_application";

export const test_application_ajv_ObjectOptional = 
    _test_application("ajv")(
        "ObjectOptional",
        typia.application<[ObjectOptional], "ajv">(),
    );