import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_protobuf_assertDecode_ObjectHierarchical =
    _test_protobuf_assertDecode("ObjectHierarchical")<ObjectHierarchical>(
        ObjectHierarchical,
    )({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<ObjectHierarchical>(input),
        encode: typia.protobuf.createEncode<ObjectHierarchical>(),
    });
