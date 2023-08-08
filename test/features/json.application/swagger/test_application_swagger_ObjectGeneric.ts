import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";

export const test_json_application_swagger_ObjectGeneric =
    _test_json_application("swagger")(
        "ObjectGeneric",
        typia.json.application<[ObjectGeneric], "swagger">(),
    );
