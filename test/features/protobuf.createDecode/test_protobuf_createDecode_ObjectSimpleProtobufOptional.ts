import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_decode_ObjectSimpleProtobufOptional =
    _test_protobuf_decode(
        "ObjectSimpleProtobufOptional",
    )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
        decode: typia.protobuf.createDecode<ObjectSimpleProtobufOptional>(),
        encode: typia.protobuf.createEncode<ObjectSimpleProtobufOptional>(),
    });
