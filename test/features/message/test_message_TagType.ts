import typia from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_message } from "../internal/_test_message";

export const test_message_TagType = _test_message(
    "TagType",
    typia.message<TagType>(),
);