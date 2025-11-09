import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_ObjectUnionCompositePointer = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "ObjectUnionCompositePointer",
)<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
  decode: (input) => typia.protobuf.assertDecode<ObjectUnionCompositePointer>(input),
  encode: typia.protobuf.createEncode<ObjectUnionCompositePointer>(),
});
