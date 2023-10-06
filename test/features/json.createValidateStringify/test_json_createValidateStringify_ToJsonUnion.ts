import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_json_createValidateStringify_ToJsonUnion = _test_json_validateStringify(
    "ToJsonUnion",
)<ToJsonUnion>(
    ToJsonUnion
)(typia.json.createValidateStringify<ToJsonUnion>());
