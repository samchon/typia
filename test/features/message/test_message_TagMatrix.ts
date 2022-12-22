import typia from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_message } from "../internal/_test_message";

export const test_message_TagMatrix = _test_message(
    "TagMatrix",
    typia.message<TagMatrix>(),
);