import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_isDecode_ObjectSimpleProtobufOptional =
    _test_protobuf_isDecode(
        "ObjectSimpleProtobufOptional",
    )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
        isDecode: typia.protobuf.createIsDecode<ObjectSimpleProtobufOptional>(),
        encode: typia.protobuf.createEncode<ObjectSimpleProtobufOptional>(),
    });
