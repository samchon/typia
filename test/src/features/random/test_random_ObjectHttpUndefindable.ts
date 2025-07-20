import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_random_ObjectHttpUndefindable = (): void =>
  _test_random("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )({
    random: () =>
      typia.random<ObjectHttpUndefindable>(
        (ObjectHttpUndefindable as any).RANDOM,
      ),
    assert: typia.createAssert<ObjectHttpUndefindable>(),
  });
