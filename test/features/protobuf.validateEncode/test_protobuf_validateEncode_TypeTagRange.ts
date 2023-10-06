import typia from "../../../src";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_protobuf_createValidateEncode_TypeTagRange = _test_protobuf_validateEncode(
    "TypeTagRange",
)<TypeTagRange>(TypeTagRange)({
    encode: (input) => typia.protobuf.validateEncode<TypeTagRange>(input),
    decode: typia.protobuf.createDecode<TypeTagRange>(),
    message: typia.protobuf.message<TypeTagRange>(),
});
