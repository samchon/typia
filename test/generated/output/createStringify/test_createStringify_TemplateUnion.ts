import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_createStringify_TemplateUnion = _test_stringify(
    "TemplateUnion",
    TemplateUnion.generate,
    (input: TemplateUnion): string => {
        const $io1: any = (input: any): boolean =>
            "string" === typeof input.name;
        const $string: any = (typia.createStringify as any).string;
        const $number: any = (typia.createStringify as any).number;
        const $throws: any = (typia.createStringify as any).throws;
        const $so0: any = (input: any): any =>
            `{"prefix":${$string(input.prefix)},"postfix":${$string(
                input.postfix,
            )},"middle":${$string(input.middle)},"mixed":${(() => {
                if ("string" === typeof input.mixed)
                    return $string(input.mixed);
                if ("number" === typeof input.mixed)
                    return $number(input.mixed);
                if ("boolean" === typeof input.mixed) return input.mixed;
                if ("object" === typeof input.mixed && null !== input.mixed)
                    return `{"name":${$string(input.mixed.name)}}`;
                $throws({
                    expected:
                        '("the_A_value" | "the_B_value" | __type | `the_${number}_value` | boolean | number)',
                    value: input.mixed,
                });
            })()}}`;
        return (() => `[${input.map((elem: any) => $so0(elem)).join(",")}]`)();
    },
);
