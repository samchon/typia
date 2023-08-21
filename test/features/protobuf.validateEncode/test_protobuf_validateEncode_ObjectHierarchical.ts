import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_protobuf_validateEncode_ObjectHierarchical =
    _test_protobuf_validateEncode("ObjectHierarchical")<ObjectHierarchical>(
        ObjectHierarchical,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ObjectHierarchical>(input),
        message: typia.protobuf.message<ObjectHierarchical>(),
    });
