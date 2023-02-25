import typia from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_isClone } from "../internal/_test_isClone";
export const test_createIsClone_ClassPropertyAssignment = _test_isClone("ClassPropertyAssignment", ClassPropertyAssignment.generate, (input: any): typia.Primitive<ClassPropertyAssignment> | null => { const is = (input: any): input is ClassPropertyAssignment => {
    const $io0 = (input: any) => "number" === typeof input.id && "string" === typeof input.name && "assignment" === input.note && false === input.editable && "boolean" === typeof input.incremental;
    return "object" === typeof input && null !== input && $io0(input);
}; const clone = (input: ClassPropertyAssignment): typia.Primitive<ClassPropertyAssignment> => {
    const $co0 = (input: any) => ({
        id: input.id,
        name: input.name,
        note: input.note,
        editable: input.editable,
        incremental: input.incremental
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; }, ClassPropertyAssignment.SPOILERS);
