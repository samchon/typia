import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { DefinitionArrayRecursiveNullable } from "../../../structures/DefinitionArrayRecursiveNullable";
export const test_isStringify_DefinitionArrayRecursiveNullable = _test_isStringify("DefinitionArrayRecursiveNullable", DefinitionArrayRecursiveNullable.generate, (input) => ((input: string | number | Array<DefinitionArrayRecursiveNullable> | null): string | null => { const is = (input: any): input is string | number | Array<DefinitionArrayRecursiveNullable> | null => {
    const $id0 = (input: any): any => undefined !== input && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)));
    return undefined !== input && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || $id0(input));
}; const stringify = (input: string | number | Array<DefinitionArrayRecursiveNullable> | null): string => {
    const $string = (typia.isStringify as any).string;
    const $number = (typia.isStringify as any).number;
    const $throws = (typia.isStringify as any).throws;
    const $id0 = (input: any): any => undefined !== input && (null === input || "string" === typeof input || "number" === typeof input || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)));
    const $sd0 = (input: any): any => null !== input ? (() => {
        if ("string" === typeof input)
            return $string(input);
        if ("number" === typeof input)
            return $number(input);
        if (Array.isArray(input))
            return `[${input.map((elem: any) => $sd0(elem)).join(",")}]`;
        $throws({
            expected: "(Array<DefinitionArrayRecursiveNullable> | null | number | string)",
            value: input
        });
    })() : "null";
    return null !== input ? (() => {
        if ("string" === typeof input)
            return $string(input);
        if ("number" === typeof input)
            return $number(input).toString();
        if (Array.isArray(input))
            return `[${input.map((elem: any) => $sd0(elem)).join(",")}]`;
        if (true)
            return $sd0(input);
        $throws({
            expected: "(Array<DefinitionArrayRecursiveNullable> | DefinitionArrayRecursiveNullable | null | number | string)",
            value: input
        });
    })() : "null";
}; return is(input) ? stringify(input) : null; })(input), DefinitionArrayRecursiveNullable.SPOILERS);
