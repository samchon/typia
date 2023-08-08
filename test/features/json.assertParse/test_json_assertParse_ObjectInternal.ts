import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_json_assertParse_ObjectInternal = _test_json_assertParse(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => typia.json.assertParse<ObjectInternal>(input),
    ObjectInternal.SPOILERS,
);
