import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_protobuf_assertEncode_ArraySimpleProtobuf =
    _test_protobuf_assertEncode("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
        ArraySimpleProtobuf,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ArraySimpleProtobuf>(input),
        message: typia.protobuf.message<ArraySimpleProtobuf>(),
        decode: typia.protobuf.createDecode<ArraySimpleProtobuf>(),
    });
