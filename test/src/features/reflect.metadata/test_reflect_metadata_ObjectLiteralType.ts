import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_reflect_metadata_ObjectLiteralType = _test_reflect_metadata(
  "ObjectLiteralType",
)(typia.reflect.metadata<[ObjectLiteralType]>());
