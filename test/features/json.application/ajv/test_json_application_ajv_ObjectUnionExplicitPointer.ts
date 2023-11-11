import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_json_application_ajv_ObjectUnionExplicitPointer =
    _test_json_application("ajv")("ObjectUnionExplicitPointer")(
        typia.json.application<[ObjectUnionExplicitPointer], "ajv">(),
    );
