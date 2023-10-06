import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_protobuf_createIsEncode_ObjectSimpleProtobuf =
    _test_protobuf_isEncode("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
        ObjectSimpleProtobuf,
    )({
        encode: typia.protobuf.createIsEncode<ObjectSimpleProtobuf>(),
        decode: typia.protobuf.createDecode<ObjectSimpleProtobuf>(),
        message: typia.protobuf.message<ObjectSimpleProtobuf>(),
    });
