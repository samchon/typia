import typia from "typia";

import { ObjectDynamic } from "../../../structures/ObjectDynamic";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectDynamic = _test_application("ajv")(
    "ObjectDynamic",
    typia.application<[ObjectDynamic], "ajv">(),
);
