import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_protobuf_assertEncode_ObjectHierarchical =
    _test_protobuf_assertEncode("ObjectHierarchical")<ObjectHierarchical>(
        ObjectHierarchical,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ObjectHierarchical>(input),
        message: typia.protobuf.message<ObjectHierarchical>(),
    });
