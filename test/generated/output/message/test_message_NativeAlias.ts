import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { NativeAlias } from "../../../structures/NativeAlias";

export const test_message_NativeAlias = _test_message(
    "NativeAlias",
    'syntax = "proto3";\n\nmessage NativeAlias {\n    __Timestamp date = 1;\n    bytes uint8Array = 2;\n    bytes uint8ClampedArray = 3;\n    bytes uint16Array = 4;\n    bytes uint32Array = 5;\n    bytes bigUint64Array = 6;\n    bytes int8Array = 7;\n    bytes int16Array = 8;\n    bytes int32Array = 9;\n    bytes bigInt64Array = 10;\n    bytes float32Array = 11;\n    bytes float64Array = 12;\n    bytes buffer = 13;\n    bytes arrayBuffer = 14;\n    bytes sharedArrayBuffer = 15;\n    bytes dataView = 16;\n    bytes weakSet = 17;\n    bytes weakMap = 18;\n}\n\nmessage __Timestamp {\n    int64 seconds = 1;\n    int32 nanos = 2;\n}',
);
