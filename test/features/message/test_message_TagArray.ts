import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { TagArray } from "../../structures/TagArray";

export const test_message_TagArray = _test_message(
    "TagArray",
    typia.message<TagArray>(),
);
