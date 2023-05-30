import typia from "typia";

import { _test_application } from "../../../internal/_test_application";
import { DefinitionJsonValue } from "../../../structures/DefinitionJsonValue";

export const test_application_ajv_DefinitionJsonValue = _test_application(
    "ajv",
)("DefinitionJsonValue", typia.application<[DefinitionJsonValue], "ajv">());
