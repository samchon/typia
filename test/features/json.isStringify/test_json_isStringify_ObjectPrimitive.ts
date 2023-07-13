import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_json_isStringify_ObjectPrimitive = _test_json_isStringify(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.json.isStringify(input),
    ObjectPrimitive.SPOILERS,
);
