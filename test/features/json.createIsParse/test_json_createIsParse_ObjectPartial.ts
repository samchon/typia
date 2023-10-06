import typia from "../../../src";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_json_createIsParse_ObjectPartial = _test_json_isParse(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)(typia.json.createIsParse<ObjectPartial>());
