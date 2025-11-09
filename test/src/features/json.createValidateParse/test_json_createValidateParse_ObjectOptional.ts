import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_json_createValidateParse_ObjectOptional = (): void => _test_json_validateParse(
    "ObjectOptional",
)<ObjectOptional>(
    ObjectOptional
)(typia.json.createValidateParse<ObjectOptional>());
