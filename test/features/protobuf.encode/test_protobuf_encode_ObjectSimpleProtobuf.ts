import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_protobuf_encode_ObjectSimpleProtobuf = _test_protobuf_encode(
    "ObjectSimpleProtobuf",
)<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)({
    encode: (input) => typia.protobuf.encode<ObjectSimpleProtobuf>(input),
    message: typia.protobuf.message<ObjectSimpleProtobuf>(),
    decode: typia.protobuf.createDecode<ObjectSimpleProtobuf>(),
});
