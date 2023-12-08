import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_protobuf_createAssertDecode_TemplateAtomic =
  _test_protobuf_assertDecode("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)(
    {
      decode: typia.protobuf.createAssertDecode<TemplateAtomic>(),
      encode: typia.protobuf.createEncode<TemplateAtomic>(),
    },
  );
