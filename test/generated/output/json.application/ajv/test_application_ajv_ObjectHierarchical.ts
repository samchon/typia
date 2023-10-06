import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectHierarchical } from "../../../../structures/ObjectHierarchical";

export const test_json_application_ajv_ObjectHierarchical =
    _test_json_application("ajv")("ObjectHierarchical")(
        typia.json.application<[ObjectHierarchical], "ajv">(),
    );
