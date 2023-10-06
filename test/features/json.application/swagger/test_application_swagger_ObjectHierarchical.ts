import typia from "typia"
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_ObjectHierarchical = 
    _test_json_application("swagger")("ObjectHierarchical")(
        typia.json.application<[ObjectHierarchical], "swagger">(),
    );