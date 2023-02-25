import typia from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_TemplateUnion = _test_stringify("TemplateUnion", TemplateUnion.generate, (input: TemplateUnion): string => {
    const $string = (typia.createStringify as any).string;
    const $throws = (typia.createStringify as any).throws;
    const $io1 = (input: any) => "string" === typeof input.name;
    const $so0 = (input: any) => `{"prefix":${$string(input.prefix)},"postfix":${$string(input.postfix)},"middle":${$string(input.middle)},"mixed":${(() => {
        if ("string" === typeof input.mixed)
            return $string(input.mixed);
        if ("number" === typeof input.mixed)
            return input.mixed;
        if ("boolean" === typeof input.mixed)
            return input.mixed;
        if ("object" === typeof input.mixed && null !== input.mixed)
            return `{"name":${$string(input.mixed.name)}}`;
        $throws({
            expected: "(\"the_A_value\" | \"the_B_value\" | Resolve<__type> | `the_${number}_value` | boolean | number)",
            value: input.mixed
        });
    })()}}`;
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
});
