import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_protobuf_createIsDecode_ObjectInternal =
    _test_protobuf_isDecode("ObjectInternal")<ObjectInternal>(ObjectInternal)({
        isDecode: typia.protobuf.createIsDecode<ObjectInternal>(),
        encode: typia.protobuf.createEncode<ObjectInternal>(),
    });
