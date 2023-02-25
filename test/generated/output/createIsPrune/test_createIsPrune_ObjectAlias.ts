import typia from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_isPrune } from "../internal/_test_isPrune";
export const test_createIsPrune_ObjectAlias = _test_isPrune("ObjectAlias", ObjectAlias.generate, (input: any): input is ObjectAlias => { const is = (input: any): input is ObjectAlias => {
    const $io0 = (input: any) => "string" === typeof input.id && "string" === typeof input.email && "string" === typeof input.name && (1 === input.sex || 2 === input.sex || "male" === input.sex || "female" === input.sex) && "number" === typeof input.age && "boolean" === typeof input.dead;
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; const prune = (input: ObjectAlias): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("id" === key || "email" === key || "name" === key || "sex" === key || "age" === key || "dead" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input))
        input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem)
                $po0(elem);
        });
}; if (!is(input))
    return false; prune(input); return true; }, ObjectAlias.SPOILERS);
