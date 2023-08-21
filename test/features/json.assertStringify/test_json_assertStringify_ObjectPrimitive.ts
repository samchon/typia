import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_json_assertStringify_ObjectPrimitive =
    _test_json_assertStringify("ObjectPrimitive")<ObjectPrimitive>(
        ObjectPrimitive,
    )((input) => typia.json.assertStringify<ObjectPrimitive>(input));
