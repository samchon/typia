import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_protobuf_validateEncode_ArraySimpleProtobufOptional =
    _test_protobuf_validateEncode(
        "ArraySimpleProtobufOptional",
    )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ArraySimpleProtobufOptional>(input),
        message: typia.protobuf.message<ArraySimpleProtobufOptional>(),
        decode: typia.protobuf.createDecode<ArraySimpleProtobufOptional>(),
    });
