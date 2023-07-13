import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectRecursive } from "../../../../structures/ObjectRecursive";

export const test_json_application_swagger_ObjectRecursive =
    _test_json_application("swagger")(
        "ObjectRecursive",
        typia.json.application<[ObjectRecursive], "swagger">(),
    );
