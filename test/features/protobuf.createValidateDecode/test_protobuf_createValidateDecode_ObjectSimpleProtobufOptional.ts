import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_validateDecode_ObjectSimpleProtobufOptional =
    _test_protobuf_validateDecode(
        "ObjectSimpleProtobufOptional",
    )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
        validateDecode:
            typia.protobuf.createValidateDecode<ObjectSimpleProtobufOptional>(),
        encode: typia.protobuf.createEncode<ObjectSimpleProtobufOptional>(),
    });
