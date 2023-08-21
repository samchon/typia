import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_protobuf_isEncode_DynamicSimple = _test_protobuf_isEncode(
    "DynamicSimple",
)<DynamicSimple>(DynamicSimple)({
    isEncode: typia.protobuf.createIsEncode<DynamicSimple>(),
    message: typia.protobuf.message<DynamicSimple>(),
});
