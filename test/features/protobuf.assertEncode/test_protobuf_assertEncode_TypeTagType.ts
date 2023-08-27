import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_protobuf_assertEncode_TypeTagType =
    _test_protobuf_assertEncode("TypeTagType")<TypeTagType>(TypeTagType)({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<TypeTagType>(input),
        message: typia.protobuf.message<TypeTagType>(),
        decode: typia.protobuf.createDecode<TypeTagType>(),
    });
