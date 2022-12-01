import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_message } from "../internal/_test_message";

export const test_message_TagType = _test_message(
    "TagType",
    TSON.message<TagType>(),
    `syntax = \"proto3\";

message TagType {
    message Type {
        int32 int = 1;
        uint32 uint = 2;
    }
}

message __Main {
    repeated TagType.Type value = 1;
}`,
);
