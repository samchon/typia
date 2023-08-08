import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectGenericArray } from "../../../../structures/ObjectGenericArray";

export const test_json_application_ajv_ObjectGenericArray =
    _test_json_application("ajv")(
        "ObjectGenericArray",
        typia.json.application<[ObjectGenericArray], "ajv">(),
    );
