import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_isDecode_ObjectSimpleProtobufNullable =
    _test_protobuf_isDecode(
        "ObjectSimpleProtobufNullable",
    )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
        isDecode: (input) =>
            typia.protobuf.isDecode<ObjectSimpleProtobufNullable>(input),
        encode: typia.protobuf.createEncode<ObjectSimpleProtobufNullable>(),
    });
