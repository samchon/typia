import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { TagPattern } from "../../structures/TagPattern";

export const test_message_TagPattern = _test_message(
    "TagPattern",
    typia.message<TagPattern>(),
);
