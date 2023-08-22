import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_protobuf_isDecode_DynamicSimple = _test_protobuf_isDecode(
    "DynamicSimple",
)<DynamicSimple>(DynamicSimple)({
    isDecode: (input) => typia.protobuf.isDecode<DynamicSimple>(input),
    encode: typia.protobuf.createEncode<DynamicSimple>(),
});
