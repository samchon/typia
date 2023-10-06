import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_json_createIsStringify_ObjectJsonTag = _test_json_isStringify(
    "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)(typia.json.createIsStringify<ObjectJsonTag>());
