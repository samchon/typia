import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
export const test_createIsClone_ClassPropertyAssignment = _test_isClone("ClassPropertyAssignment", ClassPropertyAssignment.generate, (input: any): typia.Primitive<ClassPropertyAssignment> | null => { const is = (input: any): input is ClassPropertyAssignment => {
    const $io0 = (input: any): boolean => "number" === typeof input.id && Number.isFinite(input.id) && "string" === typeof input.name && "assignment" === input.note && false === input.editable && "boolean" === typeof input.incremental;
    return "object" === typeof input && null !== input && $io0(input);
}; const clone = (input: ClassPropertyAssignment): typia.Primitive<ClassPropertyAssignment> => {
    const $co0 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        note: input.note as any,
        editable: input.editable as any,
        incremental: input.incremental as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; }, ClassPropertyAssignment.SPOILERS);
