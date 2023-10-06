import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_protobuf_createValidateEncode_ArraySimpleProtobufNullable =
    _test_protobuf_validateEncode(
        "ArraySimpleProtobufNullable",
    )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
        encode: (input) =>
            typia.protobuf.validateEncode<ArraySimpleProtobufNullable>(input),
        decode: typia.protobuf.createDecode<ArraySimpleProtobufNullable>(),
        message: typia.protobuf.message<ArraySimpleProtobufNullable>(),
    });
