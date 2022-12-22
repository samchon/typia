import typia from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_message } from "../internal/_test_message";

export const test_message_TagObjectUnion = _test_message(
    "TagObjectUnion",
    typia.message<TagObjectUnion>(),
);