import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_TemplateAtomic = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)({
  encode: (input) => typia.protobuf.assertEncode<TemplateAtomic>(input),
  decode: typia.protobuf.createDecode<TemplateAtomic>(),
  message: typia.protobuf.message<TemplateAtomic>(),
});
