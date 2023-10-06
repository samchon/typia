import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_json_assertStringify_ObjectJsonTag =
    _test_json_assertStringify("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)(
        (input) => typia.json.assertStringify<ObjectJsonTag>(input),
    );
