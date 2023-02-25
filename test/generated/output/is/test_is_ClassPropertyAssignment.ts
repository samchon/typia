import typia from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_is } from "../internal/_test_is";
export const test_is_ClassPropertyAssignment = _test_is("ClassPropertyAssignment", ClassPropertyAssignment.generate, (input) => ((input: any): input is ClassPropertyAssignment => {
    const $io0 = (input: any) => "number" === typeof input.id && "string" === typeof input.name && "assignment" === input.note && false === input.editable && "boolean" === typeof input.incremental;
    return "object" === typeof input && null !== input && $io0(input);
})(input), ClassPropertyAssignment.SPOILERS);
