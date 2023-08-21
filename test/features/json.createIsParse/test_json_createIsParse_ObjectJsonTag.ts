import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_json_isParse_ObjectJsonTag = _test_json_isParse(
    "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)(typia.json.createIsParse<ObjectJsonTag>());
