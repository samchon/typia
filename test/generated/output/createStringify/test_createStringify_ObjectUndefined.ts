import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_createStringify_ObjectUndefined = _test_stringify(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input: Array<ObjectUndefined.ILecture>): string => {
        const $string = (typia.createStringify as any).string;
        const $number = (typia.createStringify as any).number;
        const $throws = (typia.createStringify as any).throws;
        const $io1 = (input: any): boolean =>
            "string" === typeof input.id && "string" === typeof input.name;
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
                                    input.classroom.id,
                                )},"name":${$string(input.classroom.name)}}`
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
