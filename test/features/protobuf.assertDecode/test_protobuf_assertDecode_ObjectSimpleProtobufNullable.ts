import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_createAssertDecode_ObjectSimpleProtobufNullable =
    _test_protobuf_assertDecode(
        "ObjectSimpleProtobufNullable",
    )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
        decode: (input) =>
            typia.protobuf.assertDecode<ObjectSimpleProtobufNullable>(input),
        encode: typia.protobuf.createEncode<ObjectSimpleProtobufNullable>(),
    });
