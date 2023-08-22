import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_protobuf_decode_ObjectInternal = _test_protobuf_decode(
    "ObjectInternal",
)<ObjectInternal>(ObjectInternal)({
    decode: typia.protobuf.createDecode<ObjectInternal>(),
    encode: typia.protobuf.createEncode<ObjectInternal>(),
});
