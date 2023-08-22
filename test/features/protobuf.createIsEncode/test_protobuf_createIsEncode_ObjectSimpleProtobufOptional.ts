import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_isEncode_ObjectSimpleProtobufOptional =
    _test_protobuf_isEncode(
        "ObjectSimpleProtobufOptional",
    )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
        isEncode: typia.protobuf.createIsEncode<ObjectSimpleProtobufOptional>(),
        message: typia.protobuf.message<ObjectSimpleProtobufOptional>(),
        decode: typia.protobuf.createDecode<ObjectSimpleProtobufOptional>(),
    });
