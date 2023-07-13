import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_json_assertStringify_ObjectTuple = _test_json_assertStringify(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.json.createAssertStringify<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
