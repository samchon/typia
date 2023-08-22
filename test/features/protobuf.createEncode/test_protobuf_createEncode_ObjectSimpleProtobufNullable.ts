import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_encode_ObjectSimpleProtobufNullable =
    _test_protobuf_encode(
        "ObjectSimpleProtobufNullable",
    )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
        encode: typia.protobuf.createEncode<ObjectSimpleProtobufNullable>(),
        message: typia.protobuf.message<ObjectSimpleProtobufNullable>(),
        decode: typia.protobuf.createDecode<ObjectSimpleProtobufNullable>(),
    });
