import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_protobuf_createEncode_TypeTagRange = _test_protobuf_encode(
    "TypeTagRange",
)<TypeTagRange>(TypeTagRange)({
    encode: typia.protobuf.createEncode<TypeTagRange>(),
    message: typia.protobuf.message<TypeTagRange>(),
    decode: typia.protobuf.createDecode<TypeTagRange>(),
});
