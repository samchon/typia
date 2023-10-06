import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_json_assertStringify_TypeTagDefault =
    _test_json_assertStringify("TypeTagDefault")<TypeTagDefault>(
        TypeTagDefault,
    )((input) => typia.json.assertStringify<TypeTagDefault>(input));
