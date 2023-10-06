import typia from "../../../src";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_protobuf_createValidateDecode_ObjectInternal = _test_protobuf_validateDecode(
    "ObjectInternal",
)<ObjectInternal>(ObjectInternal)({
    decode: typia.protobuf.createValidateDecode<ObjectInternal>(),
    encode: typia.protobuf.createEncode<ObjectInternal>(),
});
