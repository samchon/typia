import typia from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_message } from "../internal/_test_message";

export const test_message_NativeUnion = _test_message(
    "NativeUnion",
    typia.message<NativeUnion>(),
    `syntax = \"proto3\";

message NativeUnion {
    message Union {
        optional __Timestamp date = 1;
        bytes unsigned = 2;
        bytes signed = 3;
        bytes float = 4;
        bytes buffer = 5;
        bytes weak = 6;
    }
}

message __Timestamp {
    int64 seconds = 1;
    int32 nanos = 2;
}

message __Main {
    repeated NativeUnion.Union value = 1;
}`
);