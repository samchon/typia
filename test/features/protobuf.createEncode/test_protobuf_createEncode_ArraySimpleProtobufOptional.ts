import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_protobuf_createEncode_ArraySimpleProtobufOptional =
    _test_protobuf_encode(
        "ArraySimpleProtobufOptional",
    )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
        encode: typia.protobuf.createEncode<ArraySimpleProtobufOptional>(),
        message: typia.protobuf.message<ArraySimpleProtobufOptional>(),
        decode: typia.protobuf.createDecode<ArraySimpleProtobufOptional>(),
    });
