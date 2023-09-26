import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_protobuf_createAssertEncode_ObjectHttpArray =
    _test_protobuf_assertEncode("ObjectHttpArray")<ObjectHttpArray>(
        ObjectHttpArray,
    )({
        assertEncode: typia.protobuf.createAssertEncode<ObjectHttpArray>(),
        message: typia.protobuf.message<ObjectHttpArray>(),
        decode: typia.protobuf.createDecode<ObjectHttpArray>(),
    });
