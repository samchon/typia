import typia from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_message } from "../internal/_test_message";

export const test_message_TagRange = _test_message(
    "TagRange",
    typia.message<TagRange>(),
);