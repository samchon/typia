import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_json_createStringify_CommentTagDefault = _test_json_stringify(
    "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)(
    typia.json.createStringify<CommentTagDefault>(),
);
