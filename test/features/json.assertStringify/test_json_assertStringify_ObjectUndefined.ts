import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_json_assertStringify_ObjectUndefined =
    _test_json_assertStringify(
        "ObjectUndefined",
        ObjectUndefined.generate,
        (input) => typia.json.assertStringify(input),
        ObjectUndefined.SPOILERS,
    );
