import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_protobuf_encode_ArraySimpleProtobuf = _test_protobuf_encode(
    "ArraySimpleProtobuf",
)<ArraySimpleProtobuf>(ArraySimpleProtobuf)({
    encode: (input) => typia.protobuf.encode<ArraySimpleProtobuf>(input),
    message: typia.protobuf.message<ArraySimpleProtobuf>(),
});
