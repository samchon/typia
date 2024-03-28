import typia from "typia";

import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_functional_isParameters_ObjectHttpAtomic =
  _test_functional_isParameters("ObjectHttpAtomic")(ObjectHttpAtomic)(
    (p: (input: ObjectHttpAtomic) => ObjectHttpAtomic) =>
      (input: ObjectHttpAtomic): ObjectHttpAtomic | null => {
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
