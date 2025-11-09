import typia from "typia";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectLiteralType = (): void =>
  _test_reflect_metadata("ObjectLiteralType")(
    typia.reflect.metadata<[ObjectLiteralType]>()
  );