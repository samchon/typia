import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TagStep } from "../../structures/TagStep";

export const test_protobuf_isDecode_TagStep = _test_protobuf_isDecode(
    "TagStep",
)<TagStep>(TagStep)({
    isDecode: (input) => typia.protobuf.isDecode<TagStep>(input),
    encode: typia.protobuf.createEncode<TagStep>(),
});
