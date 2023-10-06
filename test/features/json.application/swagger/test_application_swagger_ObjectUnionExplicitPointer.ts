import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_json_application_swagger_ObjectUnionExplicitPointer =
    _test_json_application("swagger")("ObjectUnionExplicitPointer")(
        typia.json.application<[ObjectUnionExplicitPointer], "swagger">(),
    );
