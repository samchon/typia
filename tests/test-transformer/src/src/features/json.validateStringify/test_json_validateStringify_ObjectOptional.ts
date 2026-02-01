import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_json_validateStringify_ObjectOptional = (): void => _test_json_validateStringify(
    "ObjectOptional",
)<ObjectOptional>(
    ObjectOptional
)((input) => typia.json.validateStringify<ObjectOptional>(input));
