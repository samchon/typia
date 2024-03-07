import typia from "typia";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
export const test_misc_createIsClone_ClassPropertyAssignment =
  _test_misc_isClone("ClassPropertyAssignment")<ClassPropertyAssignment>(
    ClassPropertyAssignment,
  )((input: any): import("typia").Resolved<ClassPropertyAssignment> | null => {
    const is = (input: any): input is ClassPropertyAssignment => {
      const $io0 = (input: any): boolean =>
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "string" === typeof input.name &&
        "assignment" === input.note &&
        false === input.editable &&
        "boolean" === typeof input.incremental;
      return "object" === typeof input && null !== input && $io0(input);
    };
    const clone = (
      input: ClassPropertyAssignment,
    ): import("typia").Resolved<ClassPropertyAssignment> => {
      const $co0 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        note: input.note as any,
        editable: input.editable as any,
        incremental: input.incremental as any,
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  });
