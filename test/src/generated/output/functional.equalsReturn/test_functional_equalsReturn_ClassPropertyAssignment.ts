import typia from "typia";

import { _test_functional_equalsReturn } from "../../../internal/_test_functional_equalsReturn";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_functional_equalsReturn_ClassPropertyAssignment =
  _test_functional_equalsReturn("ClassPropertyAssignment")(
    ClassPropertyAssignment,
  )(
    (p: (input: ClassPropertyAssignment) => ClassPropertyAssignment) =>
      (input: ClassPropertyAssignment): ClassPropertyAssignment | null => {
        const result = p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ClassPropertyAssignment => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.name &&
            "assignment" === input.note &&
            false === input.editable &&
            "boolean" === typeof input.incremental &&
            (5 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (
                  ["id", "name", "note", "editable", "incremental"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          return (
            "object" === typeof input && null !== input && $io0(input, true)
          );
        })(result)
          ? result
          : null;
      },
  );
