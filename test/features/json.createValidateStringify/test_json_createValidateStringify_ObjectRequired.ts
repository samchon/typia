import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_json_createValidateStringify_ObjectRequired = _test_json_validateStringify(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)(typia.json.createValidateStringify<ObjectRequired>());
