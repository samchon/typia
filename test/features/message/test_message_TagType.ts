import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { TagType } from "../../structures/TagType";

export const test_message_TagType = _test_message(
    "TagType",
    typia.message<TagType>(),
);
