import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_protobuf_createEncode_DynamicConstant = _test_protobuf_encode(
    "DynamicConstant",
)<DynamicConstant>(DynamicConstant)({
    encode: typia.protobuf.createEncode<DynamicConstant>(),
    decode: typia.protobuf.createDecode<DynamicConstant>(),
    message: typia.protobuf.message<DynamicConstant>(),
});
