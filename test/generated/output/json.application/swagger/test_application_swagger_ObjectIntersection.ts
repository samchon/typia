import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectIntersection } from "../../../../structures/ObjectIntersection";

export const test_json_application_swagger_ObjectIntersection =
    _test_json_application("swagger")(
        "ObjectIntersection",
        typia.json.application<[ObjectIntersection], "swagger">(),
    );
