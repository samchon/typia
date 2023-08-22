import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_protobuf_decode_DynamicTree = _test_protobuf_decode(
    "DynamicTree",
)<DynamicTree>(DynamicTree)({
    decode: typia.protobuf.createDecode<DynamicTree>(),
    encode: typia.protobuf.createEncode<DynamicTree>(),
});
