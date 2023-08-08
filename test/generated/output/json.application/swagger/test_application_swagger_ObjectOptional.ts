import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectOptional } from "../../../../structures/ObjectOptional";

export const test_json_application_swagger_ObjectOptional =
    _test_json_application("swagger")(
        "ObjectOptional",
        typia.json.application<[ObjectOptional], "swagger">(),
    );
