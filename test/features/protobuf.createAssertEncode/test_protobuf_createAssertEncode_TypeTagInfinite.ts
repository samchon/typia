import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_protobuf_createAssertEncode_TypeTagInfinite =
    _test_protobuf_assertEncode("TypeTagInfinite")<TypeTagInfinite>(
        TypeTagInfinite,
    )({
        assertEncode: typia.protobuf.createAssertEncode<TypeTagInfinite>(),
        message: typia.protobuf.message<TypeTagInfinite>(),
        decode: typia.protobuf.createDecode<TypeTagInfinite>(),
    });
