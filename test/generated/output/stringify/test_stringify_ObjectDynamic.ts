import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_stringify_ObjectDynamic = _test_stringify(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) =>
        ((input: ObjectDynamic): string => {
            const $join: any = (typia.stringify as any).join;
            const $string: any = (typia.stringify as any).string;
            const $number: any = (typia.stringify as any).number;
            const $throws: any = (typia.stringify as any).throws;
            const $so0: any = (input: any): any =>
                `{${Object.entries(input)
                    .map(([key, value]: [string, any]) => {
                        if (undefined === value) return "";
                        return `${JSON.stringify(key)}:${(() => {
                            if ("string" === typeof value)
                                return $string(value);
                            if ("number" === typeof value)
                                return $number(value);
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
        })(input),
);
