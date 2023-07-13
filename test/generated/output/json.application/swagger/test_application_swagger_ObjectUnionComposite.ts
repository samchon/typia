import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionComposite } from "../../../../structures/ObjectUnionComposite";

export const test_json_application_swagger_ObjectUnionComposite =
    _test_json_application("swagger")(
        "ObjectUnionComposite",
        typia.json.application<[ObjectUnionComposite], "swagger">(),
    );
