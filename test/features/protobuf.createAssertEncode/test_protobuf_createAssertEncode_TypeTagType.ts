import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_protobuf_createAssertEncode_TypeTagType =
    _test_protobuf_assertEncode("TypeTagType")<TypeTagType>(TypeTagType)({
        assertEncode: typia.protobuf.createAssertEncode<TypeTagType>(),
        message: typia.protobuf.message<TypeTagType>(),
        decode: typia.protobuf.createDecode<TypeTagType>(),
    });
