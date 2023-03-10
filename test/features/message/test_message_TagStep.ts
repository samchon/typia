import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { TagStep } from "../../structures/TagStep";

export const test_message_TagStep = _test_message(
    "TagStep",
    typia.message<TagStep>(),
);
