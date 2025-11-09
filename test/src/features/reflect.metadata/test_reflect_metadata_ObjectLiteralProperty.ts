import typia from "typia";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectLiteralProperty = (): void =>
  _test_reflect_metadata("ObjectLiteralProperty")(
    typia.reflect.metadata<[ObjectLiteralProperty]>()
  );