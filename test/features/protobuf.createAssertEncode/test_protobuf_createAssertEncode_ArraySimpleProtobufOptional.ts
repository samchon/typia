import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_protobuf_assertEncode_ArraySimpleProtobufOptional =
    _test_protobuf_assertEncode(
        "ArraySimpleProtobufOptional",
    )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
        assertEncode:
            typia.protobuf.createAssertEncode<ArraySimpleProtobufOptional>(),
        message: typia.protobuf.message<ArraySimpleProtobufOptional>(),
        decode: typia.protobuf.createDecode<ArraySimpleProtobufOptional>(),
    });
