import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_json_application_ajv_ObjectGenericAlias =
    _test_json_application("ajv")("ObjectGenericAlias")(
        typia.json.application<[ObjectGenericAlias], "ajv">(),
    );
