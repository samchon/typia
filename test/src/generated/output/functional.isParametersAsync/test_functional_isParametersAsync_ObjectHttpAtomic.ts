import typia from "typia";

import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_functional_isParametersAsync_ObjectHttpAtomic =
  _test_functional_isParametersAsync("ObjectHttpAtomic")(ObjectHttpAtomic)(
    (p: (input: ObjectHttpAtomic) => Promise<ObjectHttpAtomic>) =>
      async (input: ObjectHttpAtomic): Promise<ObjectHttpAtomic | null> => {
        if (
          false ===
          ((input: any): input is ObjectHttpAtomic => {
            return (
              "object" === typeof input &&
              null !== input &&
              "boolean" === typeof (input as any).boolean &&
              "bigint" === typeof (input as any).bigint &&
              "number" === typeof (input as any).number &&
              Number.isFinite((input as any).number) &&
              "string" === typeof (input as any).string
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
