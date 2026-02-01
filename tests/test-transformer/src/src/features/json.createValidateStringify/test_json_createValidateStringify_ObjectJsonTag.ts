import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_json_createValidateStringify_ObjectJsonTag = (): void => _test_json_validateStringify(
    "ObjectJsonTag",
)<ObjectJsonTag>(
    ObjectJsonTag
)(typia.json.createValidateStringify<ObjectJsonTag>());
