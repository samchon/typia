import typia from "../../../src";
import { TagDefault } from "../../structures/TagDefault";
import { _test_message } from "../internal/_test_message";

export const test_message_TagDefault = _test_message(
    "TagDefault",
    typia.message<TagDefault>(),
);