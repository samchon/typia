import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TagStep } from "../../structures/TagStep";

export const test_protobuf_isDecode_TagStep = _test_protobuf_isDecode(
    "TagStep",
)<TagStep>(TagStep)({
    isDecode: typia.protobuf.createIsDecode<TagStep>(),
    encode: typia.protobuf.createEncode<TagStep>(),
});
