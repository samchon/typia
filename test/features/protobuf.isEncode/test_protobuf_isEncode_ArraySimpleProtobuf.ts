import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_protobuf_isEncode_ArraySimpleProtobuf =
    _test_protobuf_isEncode("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
        ArraySimpleProtobuf,
    )({
        isEncode: (input) =>
            typia.protobuf.isEncode<ArraySimpleProtobuf>(input),
        message: typia.protobuf.message<ArraySimpleProtobuf>(),
    });
