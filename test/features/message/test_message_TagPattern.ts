import typia from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_message } from "../internal/_test_message";

export const test_message_TagPattern = _test_message(
    "TagPattern",
    typia.message<TagPattern>(),
);