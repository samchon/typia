import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_json_stringify_ObjectUndefined = _test_json_stringify(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input: ObjectUndefined): string => {
        const $io1 = (input: any): boolean =>
            "string" === typeof input.id && "string" === typeof input.name;
        const $string = (typia.json.createStringify as any).string;
        const $number = (typia.json.createStringify as any).number;
        const $throws = (typia.json.createStringify as any).throws;
        const $so0 = (input: any): any =>
            `{${
                undefined === input.professor
                    ? ""
                    : `"professor":${
                          undefined !== input.professor
                              ? (() => {
                                    if ("string" === typeof input.professor)
                                        return $string(input.professor);
                                    if ("number" === typeof input.professor)
                                        return $number(input.professor);
                                    $throws({
                                        expected:
                                            "(number | string | undefined)",
                                        value: input.professor,
                                    });
                                })()
                              : undefined
                      },`
            }${
                undefined === input.classroom
                    ? ""
                    : `"classroom":${
                          undefined !== input.classroom
                              ? `{"id":${$string(
                                    (input.classroom as any).id,
                                )},"name":${$string(
                                    (input.classroom as any).name,
                                )}}`
                              : undefined
                      },`
            }${
                undefined === input.grade
                    ? ""
                    : `"grade":${
                          undefined !== input.grade
                              ? $number(input.grade)
                              : undefined
                      },`
            }${
                undefined === input.unknown ||
                "function" === typeof input.unknown
                    ? ""
                    : `"unknown":${
                          undefined !== input.unknown
                              ? JSON.stringify(input.unknown)
                              : undefined
                      },`
            }"name":${$string(input.name)}}`;
        return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
    },
);
