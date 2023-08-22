import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TagCustom } from "../../structures/TagCustom";

export const test_protobuf_isDecode_TagCustom = _test_protobuf_isDecode(
    "TagCustom",
)<TagCustom>(TagCustom)({
    isDecode: (input) => typia.protobuf.isDecode<TagCustom>(input),
    encode: typia.protobuf.createEncode<TagCustom>(),
});
