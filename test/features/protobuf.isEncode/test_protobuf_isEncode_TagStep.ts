import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TagStep } from "../../structures/TagStep";

export const test_protobuf_isEncode_TagStep = _test_protobuf_isEncode(
    "TagStep",
)<TagStep>(TagStep)({
    isEncode: (input) => typia.protobuf.isEncode<TagStep>(input),
    message: typia.protobuf.message<TagStep>(),
});
