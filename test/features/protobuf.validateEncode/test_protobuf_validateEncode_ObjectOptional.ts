import typia from "../../../src";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_protobuf_createValidateEncode_ObjectOptional = _test_protobuf_validateEncode(
    "ObjectOptional",
)<ObjectOptional>(ObjectOptional)({
    encode: (input) => typia.protobuf.validateEncode<ObjectOptional>(input),
    decode: typia.protobuf.createDecode<ObjectOptional>(),
    message: typia.protobuf.message<ObjectOptional>(),
});
