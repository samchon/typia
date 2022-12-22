import typia from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_message } from "../internal/_test_message";

export const test_message_TagFormat = _test_message(
    "TagFormat",
    typia.message<TagFormat>(),
);