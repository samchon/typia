import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_json_createStringify_ObjectJsonTag = _test_json_stringify(
    "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)(typia.json.createStringify<ObjectJsonTag>());
