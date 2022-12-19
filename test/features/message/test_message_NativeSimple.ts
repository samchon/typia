import typia from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_message } from "../internal/_test_message";

export const test_message_NativeSimple = _test_message(
    "NativeSimple",
    typia.message<NativeSimple>(),
    `syntax = \"proto3\";

message NativeSimple {
    __Timestamp date = 1;
    bytes uint8Array = 2;
    bytes uint8ClampedArray = 3;
    bytes uint16Array = 4;
    bytes uint32Array = 5;
    bytes bigUint64Array = 6;
    bytes int8Array = 7;
    bytes int16Array = 8;
    bytes int32Array = 9;
    bytes bigInt64Array = 10;
    bytes float32Array = 11;
    bytes float64Array = 12;
    bytes buffer = 13;
    bytes arrayBuffer = 14;
    bytes sharedArrayBuffer = 15;
    bytes dataView = 16;
    bytes weakSet = 17;
    bytes weakMap = 18;
}

message __Timestamp {
    int64 seconds = 1;
    int32 nanos = 2;
}`
);