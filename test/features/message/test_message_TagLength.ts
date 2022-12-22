import typia from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_message } from "../internal/_test_message";

export const test_message_TagLength = _test_message(
    "TagLength",
    typia.message<TagLength>(),
);