import typia from "typia";
import { _test_functional_isFunction } from "../../../internal/_test_functional_isFunction";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
export const test_functional_isFunction_ClassPropertyAssignment =
  _test_functional_isFunction("ClassPropertyAssignment")(
    ClassPropertyAssignment,
  )(
    (p: (input: ClassPropertyAssignment) => ClassPropertyAssignment) =>
      (input: ClassPropertyAssignment): ClassPropertyAssignment | null => {
        if (
          false ===
          ((input: any): input is ClassPropertyAssignment => {
            const $io0 = (input: any): boolean =>
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "string" === typeof input.name &&
              "assignment" === input.note &&
              false === input.editable &&
              "boolean" === typeof input.incremental;
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        const result = p(input);
        return ((input: any): input is ClassPropertyAssignment => {
          const $io0 = (input: any): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.name &&
            "assignment" === input.note &&
            false === input.editable &&
            "boolean" === typeof input.incremental;
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
