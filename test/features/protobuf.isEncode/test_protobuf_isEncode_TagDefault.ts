import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TagDefault } from "../../structures/TagDefault";

export const test_protobuf_isEncode_TagDefault =
    _test_protobuf_isEncode<TagDefault>(TagDefault)({
        isEncode: (input) => typia.protobuf.isEncode<TagDefault>(input),
        message: typia.protobuf.message<TagDefault>(),
    });
