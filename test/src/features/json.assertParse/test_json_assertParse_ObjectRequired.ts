import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { TypeGuardError } from "typia";

export const test_json_assertParse_ObjectRequired = (): void => _test_json_assertParse(TypeGuardError)(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)((input) => typia.json.assertParse<ObjectRequired>(input));
