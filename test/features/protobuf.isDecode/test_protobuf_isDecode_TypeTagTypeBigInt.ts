import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_protobuf_isDecode_TypeTagTypeBigInt = _test_protobuf_isDecode(
    "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(TypeTagTypeBigInt)({
    isDecode: (input) => typia.protobuf.isDecode<TypeTagTypeBigInt>(input),
    encode: typia.protobuf.createEncode<TypeTagTypeBigInt>(),
});
