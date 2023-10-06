import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_json_stringify_ObjectSimple = _test_json_stringify(
    "ObjectSimple",
)<ObjectSimple>(
    ObjectSimple
)((input) => typia.json.stringify<ObjectSimple>(input));
