import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_reflect_metadata_ObjectLiteralProperty =
  _test_reflect_metadata("ObjectLiteralProperty")(
    typia.reflect.metadata<[ObjectLiteralProperty]>(),
  );
