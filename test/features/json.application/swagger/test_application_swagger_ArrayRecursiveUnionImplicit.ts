import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_json_application_swagger_ArrayRecursiveUnionImplicit =
    _test_json_application("swagger")(
        "ArrayRecursiveUnionImplicit",
        typia.json.application<[ArrayRecursiveUnionImplicit], "swagger">(),
    );
