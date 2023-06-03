import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_createStringify_ObjectDynamic = _test_stringify(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input: ObjectDynamic): string => {
        const $join = (typia.createStringify as any).join;
        const $string = (typia.createStringify as any).string;
        const $number = (typia.createStringify as any).number;
        const $throws = (typia.createStringify as any).throws;
        const $so0 = (input: any): any =>
            `{${Object.entries(input)
                .map(([key, value]: [string, any]) => {
                    if (undefined === value) return "";
                    return `${JSON.stringify(key)}:${(() => {
                        if ("string" === typeof value) return $string(value);
                        if ("number" === typeof value) return $number(value);
                        if ("boolean" === typeof value) return value;
                        $throws({
                            expected: "(boolean | number | string)",
                            value: value,
                        });
                    })()}`;
                })
                .filter((str: any) => "" !== str)
                .join(",")}}`;
        return $so0(input);
    },
);
