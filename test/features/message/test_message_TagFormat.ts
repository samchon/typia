import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_message } from "../internal/_test_message";

export const test_message_TagFormat = _test_message(
    "TagFormat",
    TSON.message<TagFormat>(),
    `syntax = \"proto3\";

message TagFormat {
    string uuid = 1;
    string email = 2;
    string url = 3;
    string ipv4 = 4;
    string ipv6 = 5;
    string custom = 6;
}`,
);
