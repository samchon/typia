import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_protobuf_assertEncode_ObjectRecursive =
    _test_protobuf_assertEncode("ObjectRecursive")<ObjectRecursive>(
        ObjectRecursive,
    )({
        assertEncode: typia.protobuf.createAssertEncode<ObjectRecursive>(),
        message: typia.protobuf.message<ObjectRecursive>(),
        decode: typia.protobuf.createDecode<ObjectRecursive>(),
    });
