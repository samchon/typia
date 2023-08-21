import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_protobuf_encode_ObjectHierarchical = _test_protobuf_encode(
    "ObjectHierarchical",
)<ObjectHierarchical>(ObjectHierarchical)({
    encode: typia.protobuf.createEncode<ObjectHierarchical>(),
    message: typia.protobuf.message<ObjectHierarchical>(),
});
