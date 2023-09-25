import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_protobuf_createEncode_DynamicSimple = _test_protobuf_encode(
    "DynamicSimple",
)<DynamicSimple>(DynamicSimple)({
    encode: typia.protobuf.createEncode<DynamicSimple>(),
    message: typia.protobuf.message<DynamicSimple>(),
    decode: typia.protobuf.createDecode<DynamicSimple>(),
});
