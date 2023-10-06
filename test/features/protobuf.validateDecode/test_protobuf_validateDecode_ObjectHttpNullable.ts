import typia from "../../../src";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_protobuf_createValidateDecode_ObjectHttpNullable = _test_protobuf_validateDecode(
    "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)({
    decode: (input) => typia.protobuf.validateDecode<ObjectHttpNullable>(input),
    encode: typia.protobuf.createEncode<ObjectHttpNullable>(),
});
