import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_protobuf_createAssertDecode_TemplateConstant =
  _test_protobuf_assertDecode("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )({
    decode: (input) => typia.protobuf.assertDecode<TemplateConstant>(input),
    encode: typia.protobuf.createEncode<TemplateConstant>(),
  });
