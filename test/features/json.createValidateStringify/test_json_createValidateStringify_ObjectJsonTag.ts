import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_json_createValidateStringify_ObjectJsonTag = _test_json_validateStringify(
    "ObjectJsonTag",
)<ObjectJsonTag>(
    ObjectJsonTag
)(typia.json.createValidateStringify<ObjectJsonTag>());
