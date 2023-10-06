import typia from "../../../src";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_protobuf_createValidateEncode_ObjectHttpTypeTag = _test_protobuf_validateEncode(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)({
    encode: (input) => typia.protobuf.validateEncode<ObjectHttpTypeTag>(input),
    decode: typia.protobuf.createDecode<ObjectHttpTypeTag>(),
    message: typia.protobuf.message<ObjectHttpTypeTag>(),
});
