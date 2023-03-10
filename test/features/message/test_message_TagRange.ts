import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { TagRange } from "../../structures/TagRange";

export const test_message_TagRange = _test_message(
    "TagRange",
    typia.message<TagRange>(),
);
