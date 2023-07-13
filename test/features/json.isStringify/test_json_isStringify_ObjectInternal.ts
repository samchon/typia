import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_json_isStringify_ObjectInternal = _test_json_isStringify(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => typia.json.isStringify(input),
    ObjectInternal.SPOILERS,
);
