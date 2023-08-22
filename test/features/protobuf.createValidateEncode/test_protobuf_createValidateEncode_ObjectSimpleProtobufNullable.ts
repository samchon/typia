import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_validateEncode_ObjectSimpleProtobufNullable =
    _test_protobuf_validateEncode(
        "ObjectSimpleProtobufNullable",
    )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
        validateEncode:
            typia.protobuf.createValidateEncode<ObjectSimpleProtobufNullable>(),
        message: typia.protobuf.message<ObjectSimpleProtobufNullable>(),
        decode: typia.protobuf.createDecode<ObjectSimpleProtobufNullable>(),
    });
