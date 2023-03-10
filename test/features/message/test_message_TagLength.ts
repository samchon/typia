import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { TagLength } from "../../structures/TagLength";

export const test_message_TagLength = _test_message(
    "TagLength",
    typia.message<TagLength>(),
);
