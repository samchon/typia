import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_json_createValidateParse_ObjectTuple = (): void => _test_json_validateParse(
    "ObjectTuple",
)<ObjectTuple>(
    ObjectTuple
)(typia.json.createValidateParse<ObjectTuple>());
