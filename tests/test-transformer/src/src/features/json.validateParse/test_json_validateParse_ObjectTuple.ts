import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_json_validateParse_ObjectTuple = (): void => _test_json_validateParse(
    "ObjectTuple",
)<ObjectTuple>(
    ObjectTuple
)((input) => typia.json.validateParse<ObjectTuple>(input));
