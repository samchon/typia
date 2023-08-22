import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_protobuf_encode_ObjectGenericAlias = _test_protobuf_encode(
    "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)({
    encode: (input) => typia.protobuf.encode<ObjectGenericAlias>(input),
    message: typia.protobuf.message<ObjectGenericAlias>(),
    decode: typia.protobuf.createDecode<ObjectGenericAlias>(),
});
