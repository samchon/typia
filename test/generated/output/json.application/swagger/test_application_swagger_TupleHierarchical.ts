import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TupleHierarchical } from "../../../../structures/TupleHierarchical";

export const test_json_application_swagger_TupleHierarchical =
    _test_json_application("swagger")("TupleHierarchical")(
        typia.json.application<[TupleHierarchical], "swagger">(),
    );
