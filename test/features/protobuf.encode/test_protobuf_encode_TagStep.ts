import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TagStep } from "../../structures/TagStep";

export const test_protobuf_encode_TagStep = _test_protobuf_encode<TagStep>(
    TagStep,
)({
    encode: (input) => typia.protobuf.encode<TagStep>(input),
    message: typia.protobuf.message<TagStep>(),
});
