import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TagMatrix } from "../../../structures/TagMatrix";

export const test_createEquals_TagMatrix = _test_equals(
    "TagMatrix",
    TagMatrix.generate,
    (input: any, _exceptionable: boolean = true): input is TagMatrix => {
        const $is_uuid: any = (typia.createEquals as any).is_uuid;
        const $io0: any = (
            input: any,
            _exceptionable: boolean = true,
        ): boolean =>
            Array.isArray(input.matrix) &&
            3 === input.matrix.length &&
            input.matrix.every(
                (elem: any, _index1: number) =>
                    Array.isArray(elem) &&
                    3 === elem.length &&
                    elem.every(
                        (elem: any, _index2: number) =>
                            "string" === typeof elem && $is_uuid(elem),
                    ),
            ) &&
            (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["matrix"].some((prop: any) => key === prop))
                        return true;
                    const value: any = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    },
);
