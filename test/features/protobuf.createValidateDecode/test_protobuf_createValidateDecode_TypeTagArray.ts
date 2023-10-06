import typia from "../../../src";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_createValidateDecode_TypeTagArray = _test_protobuf_validateDecode(
    "TypeTagArray",
)<TypeTagArray>(TypeTagArray)({
    decode: typia.protobuf.createValidateDecode<TypeTagArray>(),
    encode: typia.protobuf.createEncode<TypeTagArray>(),
});
