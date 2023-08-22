import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TagCustom } from "../../structures/TagCustom";

export const test_protobuf_isDecode_TagCustom = _test_protobuf_isDecode(
    "TagCustom",
)<TagCustom>(TagCustom)({
    isDecode: typia.protobuf.createIsDecode<TagCustom>(),
    encode: typia.protobuf.createEncode<TagCustom>(),
});
