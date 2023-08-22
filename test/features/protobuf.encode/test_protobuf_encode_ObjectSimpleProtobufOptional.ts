import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_encode_ObjectSimpleProtobufOptional =
    _test_protobuf_encode(
        "ObjectSimpleProtobufOptional",
    )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
        encode: (input) =>
            typia.protobuf.encode<ObjectSimpleProtobufOptional>(input),
        message: typia.protobuf.message<ObjectSimpleProtobufOptional>(),
        decode: typia.protobuf.createDecode<ObjectSimpleProtobufOptional>(),
    });
