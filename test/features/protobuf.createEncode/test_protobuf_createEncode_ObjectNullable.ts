import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_encode_ObjectNullable = _test_protobuf_encode(
    "ObjectNullable",
)<ObjectNullable>(ObjectNullable)({
    encode: typia.protobuf.createEncode<ObjectNullable>(),
    message: typia.protobuf.message<ObjectNullable>(),
    decode: typia.protobuf.createDecode<ObjectNullable>(),
});
