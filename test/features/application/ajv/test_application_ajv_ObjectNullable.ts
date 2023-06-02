import typia from "typia"
import { ObjectNullable } from "../../../structures/ObjectNullable";
import { _test_application } from "../../../internal/_test_application";

export const test_application_ajv_ObjectNullable = 
    _test_application("ajv")(
        "ObjectNullable",
        typia.application<[ObjectNullable], "ajv">(),
    );