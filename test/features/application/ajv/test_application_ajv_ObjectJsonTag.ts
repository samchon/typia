import typia from "typia"
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";
import { _test_application } from "../../../internal/_test_application";

export const test_application_ajv_ObjectJsonTag = 
    _test_application("ajv")(
        "ObjectJsonTag",
        typia.application<[ObjectJsonTag], "ajv">(),
    );