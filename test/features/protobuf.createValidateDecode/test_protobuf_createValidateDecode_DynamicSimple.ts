import typia from "../../../src";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_protobuf_createValidateDecode_DynamicSimple = _test_protobuf_validateDecode(
    "DynamicSimple",
)<DynamicSimple>(DynamicSimple)({
    decode: typia.protobuf.createValidateDecode<DynamicSimple>(),
    encode: typia.protobuf.createEncode<DynamicSimple>(),
});
