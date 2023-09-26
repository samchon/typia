import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_protobuf_createAssertEncode_ObjectGenericUnion =
    _test_protobuf_assertEncode("ObjectGenericUnion")<ObjectGenericUnion>(
        ObjectGenericUnion,
    )({
        assertEncode: typia.protobuf.createAssertEncode<ObjectGenericUnion>(),
        message: typia.protobuf.message<ObjectGenericUnion>(),
        decode: typia.protobuf.createDecode<ObjectGenericUnion>(),
    });
