import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ObjectOptional } from "../../../structures/ObjectOptional";
export const test_createIsClone_ObjectOptional = _test_isClone("ObjectOptional", ObjectOptional.generate, (input: any): typia.Primitive<ObjectOptional> | null => { const is = (input: any): input is ObjectOptional => {
    const $io0 = (input: any): boolean => (undefined === input.id || "string" === typeof input.id) && (undefined === input.name || "string" === typeof input.name) && (undefined === input.email || "string" === typeof input.email) && (undefined === input.sequence || "number" === typeof input.sequence && Number.isFinite(input.sequence));
    return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
}; const clone = (input: ObjectOptional): typia.Primitive<ObjectOptional> => {
    const $co0 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        email: input.email as any,
        sequence: input.sequence as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; }, ObjectOptional.SPOILERS);
