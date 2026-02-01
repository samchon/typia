import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_json_validateParse_ObjectNullable = (): void => _test_json_validateParse(
    "ObjectNullable",
)<ObjectNullable>(
    ObjectNullable
)((input) => typia.json.validateParse<ObjectNullable>(input));
