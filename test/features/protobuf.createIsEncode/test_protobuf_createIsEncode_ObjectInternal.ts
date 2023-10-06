import typia from "../../../src";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_protobuf_createIsEncode_ObjectInternal = _test_protobuf_isEncode(
    "ObjectInternal",
)<ObjectInternal>(ObjectInternal)({
    encode: typia.protobuf.createIsEncode<ObjectInternal>(),
    decode: typia.protobuf.createDecode<ObjectInternal>(),
    message: typia.protobuf.message<ObjectInternal>(),
});
