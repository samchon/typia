import typia from "../../../src";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_protobuf_createValidateDecode_ObjectHttpTypeTag = _test_protobuf_validateDecode(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)({
    decode: typia.protobuf.createValidateDecode<ObjectHttpTypeTag>(),
    encode: typia.protobuf.createEncode<ObjectHttpTypeTag>(),
});
