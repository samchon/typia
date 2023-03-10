import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_isStringify_ObjectUndefined = _test_isStringify(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) =>
        ((input: Array<ObjectUndefined.ILecture>): string | null => {
            const is = (
                input: any,
            ): input is Array<ObjectUndefined.ILecture> => {
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    (undefined === input.professor ||
                        "string" === typeof input.professor ||
                        ("number" === typeof input.professor &&
                            Number.isFinite(input.professor))) &&
                    (undefined === input.classroom ||
                        ("object" === typeof input.classroom &&
                            null !== input.classroom &&
                            $io1(input.classroom))) &&
                    (undefined === input.grade ||
                        ("number" === typeof input.grade &&
                            Number.isFinite(input.grade))) &&
                    null !== input.nothing &&
                    undefined === input.nothing &&
                    true &&
                    null !== input.never &&
                    undefined === input.never;
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.name;
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const stringify = (
                input: Array<ObjectUndefined.ILecture>,
            ): string => {
                const $string = (typia.isStringify as any).string;
                const $number = (typia.isStringify as any).number;
                const $throws = (typia.isStringify as any).throws;
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.name;
                const $so0 = (input: any): any =>
                    `{${
                        undefined === input.professor
                            ? ""
                            : `"professor":${
                                  undefined !== input.professor
                                      ? (() => {
                                            if (
                                                "string" ===
                                                typeof input.professor
                                            )
                                                return $string(input.professor);
                                            if (
                                                "number" ===
                                                typeof input.professor
                                            )
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
                                        )},"name":${$string(
                                            input.classroom.name,
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
            };
            return is(input) ? stringify(input) : null;
        })(input),
    ObjectUndefined.SPOILERS,
);
