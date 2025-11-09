import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_reflect_metadata_ObjectClosure = (): void =>
  _test_reflect_metadata("ObjectClosure")(
    typia.reflect.metadata<[ObjectClosure]>(),
  );
