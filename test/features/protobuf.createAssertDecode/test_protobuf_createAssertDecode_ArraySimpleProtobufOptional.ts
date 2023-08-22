import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_protobuf_assertDecode_ArraySimpleProtobufOptional =
    _test_protobuf_assertDecode(
        "ArraySimpleProtobufOptional",
    )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
        assertDecode:
            typia.protobuf.createAssertDecode<ArraySimpleProtobufOptional>(),
        encode: typia.protobuf.createEncode<ArraySimpleProtobufOptional>(),
    });
