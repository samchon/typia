import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { TagFormat } from "../../structures/TagFormat";

export const test_message_TagFormat = _test_message(
    "TagFormat",
    typia.message<TagFormat>(),
);
