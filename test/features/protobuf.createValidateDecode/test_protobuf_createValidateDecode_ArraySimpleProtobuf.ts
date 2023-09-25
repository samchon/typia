import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_protobuf_createValidateDecode_ArraySimpleProtobuf =
    _test_protobuf_validateDecode("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
        ArraySimpleProtobuf,
    )({
        validateDecode:
            typia.protobuf.createValidateDecode<ArraySimpleProtobuf>(),
        encode: typia.protobuf.createEncode<ArraySimpleProtobuf>(),
    });
