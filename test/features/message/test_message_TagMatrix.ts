import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_message_TagMatrix = _test_message(
    "TagMatrix",
    typia.message<TagMatrix>(),
);
