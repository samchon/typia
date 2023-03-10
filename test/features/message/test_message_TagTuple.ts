import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { TagTuple } from "../../structures/TagTuple";

export const test_message_TagTuple = _test_message(
    "TagTuple",
    typia.message<TagTuple>(),
);
