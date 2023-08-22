import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_protobuf_isDecode_ObjectHierarchical =
    _test_protobuf_isDecode("ObjectHierarchical")<ObjectHierarchical>(
        ObjectHierarchical,
    )({
        isDecode: typia.protobuf.createIsDecode<ObjectHierarchical>(),
        encode: typia.protobuf.createEncode<ObjectHierarchical>(),
    });
