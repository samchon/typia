import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_TemplateAtomic = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)({
  decode: (input) => typia.protobuf.assertDecode<TemplateAtomic>(input),
  encode: typia.protobuf.createEncode<TemplateAtomic>(),
});
