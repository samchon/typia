import typia from "typia";
import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
export const test_functional_isParameters_ClassPropertyAssignment =
  _test_functional_isParameters("ClassPropertyAssignment")(
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
        return p(input);
      },
  );
