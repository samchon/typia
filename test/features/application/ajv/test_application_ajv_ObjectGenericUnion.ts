import typia from "typia"
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectGenericUnion = 
    _test_application("ajv")(
        "ObjectGenericUnion",
        typia.application<[ObjectGenericUnion], "ajv">(),
    );