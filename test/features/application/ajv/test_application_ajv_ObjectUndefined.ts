import typia from "typia"
import { ObjectUndefined } from "../../../structures/ObjectUndefined";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectUndefined = 
    _test_application("ajv")(
        "ObjectUndefined",
        typia.application<[ObjectUndefined], "ajv">(),
    );