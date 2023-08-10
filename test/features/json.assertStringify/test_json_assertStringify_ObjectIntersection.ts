import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_json_assertStringify_ObjectIntersection =
    _test_json_assertStringify<ObjectIntersection>(ObjectIntersection)(
        (input) => typia.json.assertStringify<ObjectIntersection>(input),
    );
