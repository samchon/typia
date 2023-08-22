import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_protobuf_isEncode_DynamicConstant = _test_protobuf_isEncode(
    "DynamicConstant",
)<DynamicConstant>(DynamicConstant)({
    isEncode: (input) => typia.protobuf.isEncode<DynamicConstant>(input),
    message: typia.protobuf.message<DynamicConstant>(),
    decode: typia.protobuf.createDecode<DynamicConstant>(),
});
