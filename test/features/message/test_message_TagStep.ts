import typia from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_message } from "../internal/_test_message";

export const test_message_TagStep = _test_message(
    "TagStep",
    typia.message<TagStep>(),
);