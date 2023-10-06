import typia from "typia"
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_ObjectUnionCompositePointer = 
    _test_json_application("swagger")("ObjectUnionCompositePointer")(
        typia.json.application<[ObjectUnionCompositePointer], "swagger">(),
    );