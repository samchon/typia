import typia from "../../../src";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_protobuf_createValidateDecode_ObjectRequired = _test_protobuf_validateDecode(
    "ObjectRequired",
)<ObjectRequired>(ObjectRequired)({
    decode: typia.protobuf.createValidateDecode<ObjectRequired>(),
    encode: typia.protobuf.createEncode<ObjectRequired>(),
});
