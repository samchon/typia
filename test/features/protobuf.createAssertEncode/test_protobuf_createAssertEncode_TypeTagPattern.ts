import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_protobuf_createAssertEncode_TypeTagPattern =
    _test_protobuf_assertEncode("TypeTagPattern")<TypeTagPattern>(
        TypeTagPattern,
    )({
        encode: typia.protobuf.createAssertEncode<TypeTagPattern>(),
        decode: typia.protobuf.createDecode<TypeTagPattern>(),
        message: typia.protobuf.message<TypeTagPattern>(),
    });
