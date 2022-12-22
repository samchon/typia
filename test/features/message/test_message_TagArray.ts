import typia from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_message } from "../internal/_test_message";

export const test_message_TagArray = _test_message(
    "TagArray",
    typia.message<TagArray>(),
);