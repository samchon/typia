import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_protobuf_assertEncode_ArraySimpleProtobufNullable =
    _test_protobuf_assertEncode(
        "ArraySimpleProtobufNullable",
    )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
        assertEncode:
            typia.protobuf.createAssertEncode<ArraySimpleProtobufNullable>(),
        message: typia.protobuf.message<ArraySimpleProtobufNullable>(),
        decode: typia.protobuf.createDecode<ArraySimpleProtobufNullable>(),
    });
