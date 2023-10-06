import typia from "../../../src";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_protobuf_createValidateEncode_ObjectInternal = _test_protobuf_validateEncode(
    "ObjectInternal",
)<ObjectInternal>(ObjectInternal)({
    encode: typia.protobuf.createValidateEncode<ObjectInternal>(),
    decode: typia.protobuf.createDecode<ObjectInternal>(),
    message: typia.protobuf.message<ObjectInternal>(),
});
