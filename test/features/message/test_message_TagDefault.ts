import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { TagDefault } from "../../structures/TagDefault";

export const test_message_TagDefault = _test_message(
    "TagDefault",
    typia.message<TagDefault>(),
);
