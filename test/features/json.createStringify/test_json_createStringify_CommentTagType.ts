import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_json_stringify_CommentTagType = _test_json_stringify(
    "CommentTagType",
)<CommentTagType>(CommentTagType)(typia.json.createStringify<CommentTagType>());
