import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_protobuf_decode_ObjectSimpleProtobuf = _test_protobuf_decode(
    "ObjectSimpleProtobuf",
)<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)({
    decode: typia.protobuf.createDecode<ObjectSimpleProtobuf>(),
    encode: typia.protobuf.createEncode<ObjectSimpleProtobuf>(),
});
