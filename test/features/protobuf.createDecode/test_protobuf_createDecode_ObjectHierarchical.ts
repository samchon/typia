import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_protobuf_decode_ObjectHierarchical = _test_protobuf_decode(
    "ObjectHierarchical",
)<ObjectHierarchical>(ObjectHierarchical)({
    decode: typia.protobuf.createDecode<ObjectHierarchical>(),
    encode: typia.protobuf.createEncode<ObjectHierarchical>(),
});
