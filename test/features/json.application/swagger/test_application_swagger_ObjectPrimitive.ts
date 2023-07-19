import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_json_application_swagger_ObjectPrimitive =
    _test_json_application("swagger")("ObjectPrimitive")(
        typia.json.application<[ObjectPrimitive], "swagger">(),
    );
