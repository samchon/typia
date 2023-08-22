import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_protobuf_assertDecode_ArraySimpleProtobufNullable =
    _test_protobuf_assertDecode(
        "ArraySimpleProtobufNullable",
    )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
        assertDecode:
            typia.protobuf.createAssertDecode<ArraySimpleProtobufNullable>(),
        encode: typia.protobuf.createEncode<ArraySimpleProtobufNullable>(),
    });
