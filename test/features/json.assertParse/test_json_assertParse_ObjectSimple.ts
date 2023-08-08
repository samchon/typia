import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_json_assertParse_ObjectSimple = _test_json_assertParse(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.json.assertParse<ObjectSimple>(input),
    ObjectSimple.SPOILERS,
);
