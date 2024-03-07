import typia from "typia";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ClassClosure = _test_reflect_metadata(
  "ClassClosure",
)(typia.reflect.metadata<[ClassClosure]>());
