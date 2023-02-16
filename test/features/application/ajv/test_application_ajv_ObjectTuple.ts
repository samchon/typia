import typia from "typia";

import { ObjectTuple } from "../../../structures/ObjectTuple";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectTuple = _test_application("ajv")(
    "ObjectTuple",
    typia.application<[ObjectTuple], "ajv">(),
);
