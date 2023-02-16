import typia from "typia";

import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectUnionExplicit = _test_application(
    "ajv",
)("ObjectUnionExplicit", typia.application<[ObjectUnionExplicit], "ajv">());
