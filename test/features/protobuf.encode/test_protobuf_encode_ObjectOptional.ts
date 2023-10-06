import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_protobuf_createEncode_ObjectOptional = _test_protobuf_encode(
    "ObjectOptional",
)<ObjectOptional>(ObjectOptional)({
    encode: (input) => typia.protobuf.encode<ObjectOptional>(input),
    decode: typia.protobuf.createDecode<ObjectOptional>(),
    message: typia.protobuf.message<ObjectOptional>(),
});
