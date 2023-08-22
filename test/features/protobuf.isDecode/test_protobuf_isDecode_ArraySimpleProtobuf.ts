import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_protobuf_isDecode_ArraySimpleProtobuf =
    _test_protobuf_isDecode("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
        ArraySimpleProtobuf,
    )({
        isDecode: (input) =>
            typia.protobuf.isDecode<ArraySimpleProtobuf>(input),
        encode: typia.protobuf.createEncode<ArraySimpleProtobuf>(),
    });
