import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_protobuf_createValidateEncode_ArraySimpleProtobuf =
    _test_protobuf_validateEncode("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
        ArraySimpleProtobuf,
    )({
        validateEncode:
            typia.protobuf.createValidateEncode<ArraySimpleProtobuf>(),
        message: typia.protobuf.message<ArraySimpleProtobuf>(),
        decode: typia.protobuf.createDecode<ArraySimpleProtobuf>(),
    });
