import typia from "../../../src";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_json_createIsParse_ObjectInternal = _test_json_isParse(
    "ObjectInternal",
)<ObjectInternal>(
    ObjectInternal
)(typia.json.createIsParse<ObjectInternal>());
