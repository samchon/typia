import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_json_isStringify_ObjectSimple = _test_json_isStringify(
    "ObjectSimple",
    ObjectSimple.generate,
    typia.json.createIsStringify<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
