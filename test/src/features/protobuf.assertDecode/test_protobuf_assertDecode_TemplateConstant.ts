import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_TemplateConstant =
  _test_protobuf_assertDecode(TypeGuardError)(
    "TemplateConstant",
  )<TemplateConstant>(TemplateConstant)({
    decode: (input) => typia.protobuf.assertDecode<TemplateConstant>(input),
    encode: typia.protobuf.createEncode<TemplateConstant>(),
  });
