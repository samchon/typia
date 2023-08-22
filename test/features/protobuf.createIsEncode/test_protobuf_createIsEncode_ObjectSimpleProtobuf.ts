import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_protobuf_isEncode_ObjectSimpleProtobuf =
    _test_protobuf_isEncode("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
        ObjectSimpleProtobuf,
    )({
        isEncode: typia.protobuf.createIsEncode<ObjectSimpleProtobuf>(),
        message: typia.protobuf.message<ObjectSimpleProtobuf>(),
        decode: typia.protobuf.createDecode<ObjectSimpleProtobuf>(),
    });
