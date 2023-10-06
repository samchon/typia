import typia from "../../../src";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_createDecode_ObjectSimpleProtobufOptional = _test_protobuf_decode(
    "ObjectSimpleProtobufOptional",
)<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
    decode: (input) => typia.protobuf.decode<ObjectSimpleProtobufOptional>(input),
    encode: typia.protobuf.createEncode<ObjectSimpleProtobufOptional>(),
});
