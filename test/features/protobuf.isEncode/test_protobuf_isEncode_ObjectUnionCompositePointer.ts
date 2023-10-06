import typia from "../../../src";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_protobuf_createIsEncode_ObjectUnionCompositePointer = _test_protobuf_isEncode(
    "ObjectUnionCompositePointer",
)<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
    encode: (input) => typia.protobuf.isEncode<ObjectUnionCompositePointer>(input),
    decode: typia.protobuf.createDecode<ObjectUnionCompositePointer>(),
    message: typia.protobuf.message<ObjectUnionCompositePointer>(),
});
