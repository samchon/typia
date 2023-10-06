import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";

export const test_json_application_swagger_ObjectUnionImplicit =
    _test_json_application("swagger")("ObjectUnionImplicit")(
        typia.json.application<[ObjectUnionImplicit], "swagger">(),
    );
