import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_message_TagObjectUnion = _test_message(
    "TagObjectUnion",
    typia.message<TagObjectUnion>(),
);
