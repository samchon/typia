import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_protobuf_createEncode_ArraySimpleProtobufNullable =
    _test_protobuf_encode(
        "ArraySimpleProtobufNullable",
    )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
        encode: typia.protobuf.createEncode<ArraySimpleProtobufNullable>(),
        message: typia.protobuf.message<ArraySimpleProtobufNullable>(),
        decode: typia.protobuf.createDecode<ArraySimpleProtobufNullable>(),
    });
