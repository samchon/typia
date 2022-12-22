import typia from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_message } from "../internal/_test_message";

export const test_message_TagTuple = _test_message(
    "TagTuple",
    typia.message<TagTuple>(),
);