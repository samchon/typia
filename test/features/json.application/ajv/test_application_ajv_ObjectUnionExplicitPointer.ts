import typia from "typia"
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ObjectUnionExplicitPointer = 
    _test_json_application("ajv")("ObjectUnionExplicitPointer")(
        typia.json.application<[ObjectUnionExplicitPointer], "ajv">(),
    );