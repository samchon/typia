import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TagStep } from "../../structures/TagStep";

export const test_protobuf_decode_TagStep = _test_protobuf_decode(
    "TagStep",
)<TagStep>(TagStep)({
    decode: (input) => typia.protobuf.decode<TagStep>(input),
    encode: typia.protobuf.createEncode<TagStep>(),
});
