import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_protobuf_isDecode_ArraySimpleProtobufNullable =
    _test_protobuf_isDecode(
        "ArraySimpleProtobufNullable",
    )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
        isDecode: (input) =>
            typia.protobuf.isDecode<ArraySimpleProtobufNullable>(input),
        encode: typia.protobuf.createEncode<ArraySimpleProtobufNullable>(),
    });
