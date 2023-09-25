import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_createAssertDecode_TypeTagArray =
    _test_protobuf_assertDecode("TypeTagArray")<TypeTagArray>(TypeTagArray)({
        assertDecode: typia.protobuf.createAssertDecode<TypeTagArray>(),
        encode: typia.protobuf.createEncode<TypeTagArray>(),
    });
