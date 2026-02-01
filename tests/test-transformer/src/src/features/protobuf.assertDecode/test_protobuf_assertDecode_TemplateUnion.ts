import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_TemplateUnion = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)({
  decode: (input) => typia.protobuf.assertDecode<TemplateUnion>(input),
  encode: typia.protobuf.createEncode<TemplateUnion>(),
});
