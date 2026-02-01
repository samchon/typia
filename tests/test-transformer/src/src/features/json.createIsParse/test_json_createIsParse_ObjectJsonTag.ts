import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_json_createIsParse_ObjectJsonTag = (): void => _test_json_isParse(
    "ObjectJsonTag",
)<ObjectJsonTag>(
    ObjectJsonTag
)(typia.json.createIsParse<ObjectJsonTag>());
