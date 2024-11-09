import typia from "typia";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectClosure = 
  _test_reflect_metadata("ObjectClosure")(
    typia.reflect.metadata<[ObjectClosure]>()
  );