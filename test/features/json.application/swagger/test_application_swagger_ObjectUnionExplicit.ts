import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_json_application_swagger_ObjectUnionExplicit =
    _test_json_application("swagger")("ObjectUnionExplicit")(
        typia.json.application<[ObjectUnionExplicit], "swagger">(),
    );
