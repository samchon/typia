import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_json_validateParse_ObjectDynamic = (): void => _test_json_validateParse(
    "ObjectDynamic",
)<ObjectDynamic>(
    ObjectDynamic
)((input) => typia.json.validateParse<ObjectDynamic>(input));
