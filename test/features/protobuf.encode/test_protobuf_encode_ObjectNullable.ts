import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_encode_ObjectNullable = _test_protobuf_encode(
    "ObjectNullable",
)<ObjectNullable>(ObjectNullable)({
    encode: (input) => typia.protobuf.encode<ObjectNullable>(input),
    message: typia.protobuf.message<ObjectNullable>(),
});
