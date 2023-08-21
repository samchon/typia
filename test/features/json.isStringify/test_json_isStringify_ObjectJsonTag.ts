import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_json_isStringify_ObjectJsonTag = _test_json_isStringify(
    "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)((input) =>
    typia.json.isStringify<ObjectJsonTag>(input),
);
