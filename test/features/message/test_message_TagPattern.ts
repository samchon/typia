import typia from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_message } from "../internal/_test_message";

export const test_message_TagPattern = _test_message(
    "TagPattern",
    typia.message<TagPattern>(),
    `syntax = \"proto3\";

message TagPattern {
    string uuid = 1;
    string email = 2;
    string url = 3;
    string ipv4 = 4;
    string ipv6 = 5;
}`
);