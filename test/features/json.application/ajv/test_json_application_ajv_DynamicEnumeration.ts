import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_json_application_ajv_DynamicEnumeration =
    _test_json_application("ajv")("DynamicEnumeration")(
        typia.json.application<[DynamicEnumeration], "ajv">(),
    );
