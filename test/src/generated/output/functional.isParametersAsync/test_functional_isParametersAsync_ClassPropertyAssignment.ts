import typia from "typia";
import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
export const test_functional_isParametersAsync_ClassPropertyAssignment =
  _test_functional_isParametersAsync("ClassPropertyAssignment")(
    ClassPropertyAssignment,
  )(
    (p: (input: ClassPropertyAssignment) => Promise<ClassPropertyAssignment>) =>
      async (
        input: ClassPropertyAssignment,
      ): Promise<ClassPropertyAssignment | null> => {
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
