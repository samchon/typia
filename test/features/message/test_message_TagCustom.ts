import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { TagCustom } from "../../structures/TagCustom";

export const test_message_TagCustom = _test_message(
    "TagCustom",
    typia.message<TagCustom>(),
);
