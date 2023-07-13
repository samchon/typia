import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_json_application_swagger_ObjectJsonTag =
    _test_json_application("swagger")(
        "ObjectJsonTag",
        typia.json.application<[ObjectJsonTag], "swagger">(),
    );
