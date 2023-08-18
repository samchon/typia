import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_protobuf_isEncode_ObjectHierarchical =
    _test_protobuf_isEncode<ObjectHierarchical>(ObjectHierarchical)({
        isEncode: (input) => typia.protobuf.isEncode<ObjectHierarchical>(input),
        message: typia.protobuf.message<ObjectHierarchical>(),
    });
