import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";

export const test_json_application_swagger_ObjectPropertyNullable =
    _test_json_application("swagger")("ObjectPropertyNullable")(
        typia.json.application<[ObjectPropertyNullable], "swagger">(),
    );
