import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_protobuf_createEncode_ObjectInternal = _test_protobuf_encode(
    "ObjectInternal",
)<ObjectInternal>(ObjectInternal)({
    encode: typia.protobuf.createEncode<ObjectInternal>(),
    decode: typia.protobuf.createDecode<ObjectInternal>(),
    message: typia.protobuf.message<ObjectInternal>(),
});
