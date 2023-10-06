import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_protobuf_createAssertEncode_ObjectInternal =
    _test_protobuf_assertEncode("ObjectInternal")<ObjectInternal>(
        ObjectInternal,
    )({
        encode: typia.protobuf.createAssertEncode<ObjectInternal>(),
        decode: typia.protobuf.createDecode<ObjectInternal>(),
        message: typia.protobuf.message<ObjectInternal>(),
    });
