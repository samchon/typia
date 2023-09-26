import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_protobuf_createEncode_ArraySimpleProtobuf =
    _test_protobuf_encode("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
        ArraySimpleProtobuf,
    )({
        encode: typia.protobuf.createEncode<ArraySimpleProtobuf>(),
        message: typia.protobuf.message<ArraySimpleProtobuf>(),
        decode: typia.protobuf.createDecode<ArraySimpleProtobuf>(),
    });
