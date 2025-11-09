import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_reflect_metadata_ClassClosure = (): void =>
  _test_reflect_metadata("ClassClosure")(
    typia.reflect.metadata<[ClassClosure]>(),
  );
