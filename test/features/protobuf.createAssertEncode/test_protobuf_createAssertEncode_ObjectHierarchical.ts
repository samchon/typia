import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_protobuf_assertEncode_ObjectHierarchical =
    _test_protobuf_assertEncode("ObjectHierarchical")<ObjectHierarchical>(
        ObjectHierarchical,
    )({
        assertEncode: typia.protobuf.createAssertEncode<ObjectHierarchical>(),
        message: typia.protobuf.message<ObjectHierarchical>(),
        decode: typia.protobuf.createDecode<ObjectHierarchical>(),
    });
