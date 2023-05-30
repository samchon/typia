import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ClassGetter } from "../../../structures/ClassGetter";
export const test_createIs_ClassGetter = _test_is("ClassGetter", ClassGetter.generate, (input: any): input is ClassGetter => {
    const $io0 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.name && (null === input.dead || "boolean" === typeof input.dead);
    return "object" === typeof input && null !== input && $io0(input);
}, ClassGetter.SPOILERS);
