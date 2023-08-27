import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_isDecode_TypeTagArray = _test_protobuf_isDecode(
    "TypeTagArray",
)<TypeTagArray>(TypeTagArray)({
    isDecode: (input) => typia.protobuf.isDecode<TypeTagArray>(input),
    encode: typia.protobuf.createEncode<TypeTagArray>(),
});
