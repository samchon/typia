import typia from "typia";

import { _test_application } from "../../../internal/_test_application";
import { DefinitionJsonValue } from "../../../structures/DefinitionJsonValue";

export const test_application_swagger_DefinitionJsonValue = _test_application(
    "swagger",
)("DefinitionJsonValue", typia.application<[DefinitionJsonValue], "swagger">());
