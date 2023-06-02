import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";

export const test_createIsClone_ObjectHierarchical = _test_isClone(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input: any): typia.Primitive<ObjectHierarchical> | null => {
        const is: any = (input: any): input is ObjectHierarchical => {
            const $io0: any = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "object" === typeof input.channel &&
                null !== input.channel &&
                $io1(input.channel) &&
                (null === input.member ||
                    ("object" === typeof input.member &&
                        null !== input.member &&
                        $io3(input.member))) &&
                (null === input.account ||
                    ("object" === typeof input.account &&
                        null !== input.account &&
                        $io4(input.account))) &&
                "string" === typeof input.href &&
                "string" === typeof input.referrer &&
                Array.isArray(input.ip) &&
                input.ip.length === 4 &&
                "number" === typeof input.ip[0] &&
                Number.isFinite(input.ip[0]) &&
                "number" === typeof input.ip[1] &&
                Number.isFinite(input.ip[1]) &&
                "number" === typeof input.ip[2] &&
                Number.isFinite(input.ip[2]) &&
                "number" === typeof input.ip[3] &&
                Number.isFinite(input.ip[3]) &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                "number" === typeof input.created_at.time &&
                Number.isFinite(input.created_at.time) &&
                "number" === typeof input.created_at.zone &&
                Number.isFinite(input.created_at.zone);
            const $io1: any = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.code &&
                "string" === typeof input.name &&
                "number" === typeof input.sequence &&
                Number.isFinite(input.sequence) &&
                "boolean" === typeof input.exclusive &&
                "number" === typeof input.priority &&
                Number.isFinite(input.priority) &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                "number" === typeof input.created_at.time &&
                Number.isFinite(input.created_at.time) &&
                "number" === typeof input.created_at.zone &&
                Number.isFinite(input.created_at.zone);
            const $io3: any = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "object" === typeof input.account &&
                null !== input.account &&
                $io4(input.account) &&
                (null === input.enterprise ||
                    ("object" === typeof input.enterprise &&
                        null !== input.enterprise &&
                        $io5(input.enterprise))) &&
                Array.isArray(input.emails) &&
                input.emails.every((elem: any) => "string" === typeof elem) &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                "number" === typeof input.created_at.time &&
                Number.isFinite(input.created_at.time) &&
                "number" === typeof input.created_at.zone &&
                Number.isFinite(input.created_at.zone) &&
                "boolean" === typeof input.authorized;
            const $io4: any = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.code &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                "number" === typeof input.created_at.time &&
                Number.isFinite(input.created_at.time) &&
                "number" === typeof input.created_at.zone &&
                Number.isFinite(input.created_at.zone);
            const $io5: any = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "object" === typeof input.account &&
                null !== input.account &&
                $io4(input.account) &&
                "string" === typeof input.name &&
                "number" === typeof input.grade &&
                Number.isFinite(input.grade) &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                "number" === typeof input.created_at.time &&
                Number.isFinite(input.created_at.time) &&
                "number" === typeof input.created_at.zone &&
                Number.isFinite(input.created_at.zone);
            return "object" === typeof input && null !== input && $io0(input);
        };
        const clone: any = (
            input: ObjectHierarchical,
        ): typia.Primitive<ObjectHierarchical> => {
            const $io1: any = (input: any): boolean =>
                "number" === typeof input.id &&
                "string" === typeof input.code &&
                "string" === typeof input.name &&
                "number" === typeof input.sequence &&
                "boolean" === typeof input.exclusive &&
                "number" === typeof input.priority &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                $io2(input.created_at);
            const $io2: any = (input: any): boolean =>
                "number" === typeof input.time &&
                "number" === typeof input.zone;
            const $io3: any = (input: any): boolean =>
                "number" === typeof input.id &&
                "object" === typeof input.account &&
                null !== input.account &&
                $io4(input.account) &&
                (null === input.enterprise ||
                    ("object" === typeof input.enterprise &&
                        null !== input.enterprise &&
                        $io5(input.enterprise))) &&
                Array.isArray(input.emails) &&
                input.emails.every((elem: any) => "string" === typeof elem) &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                $io2(input.created_at) &&
                "boolean" === typeof input.authorized;
            const $io4: any = (input: any): boolean =>
                "number" === typeof input.id &&
                "string" === typeof input.code &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                $io2(input.created_at);
            const $io5: any = (input: any): boolean =>
                "number" === typeof input.id &&
                "object" === typeof input.account &&
                null !== input.account &&
                $io4(input.account) &&
                "string" === typeof input.name &&
                "number" === typeof input.grade &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                $io2(input.created_at);
            const $co0: any = (input: any): any => ({
                id: input.id as any,
                channel:
                    "object" === typeof input.channel && null !== input.channel
                        ? $co1(input.channel)
                        : (input.channel as any),
                member:
                    "object" === typeof input.member && null !== input.member
                        ? $co3(input.member)
                        : (input.member as any),
                account:
                    "object" === typeof input.account && null !== input.account
                        ? $co4(input.account)
                        : (input.account as any),
                href: input.href as any,
                referrer: input.referrer as any,
                ip:
                    Array.isArray(input.ip) &&
                    input.ip.length === 4 &&
                    "number" === typeof input.ip[0] &&
                    "number" === typeof input.ip[1] &&
                    "number" === typeof input.ip[2] &&
                    "number" === typeof input.ip[3]
                        ? ([
                              input.ip[0] as any,
                              input.ip[1] as any,
                              input.ip[2] as any,
                              input.ip[3] as any,
                          ] as any)
                        : (input.ip as any),
                created_at:
                    "object" === typeof input.created_at &&
                    null !== input.created_at
                        ? $co2(input.created_at)
                        : (input.created_at as any),
            });
            const $co1: any = (input: any): any => ({
                id: input.id as any,
                code: input.code as any,
                name: input.name as any,
                sequence: input.sequence as any,
                exclusive: input.exclusive as any,
                priority: input.priority as any,
                created_at:
                    "object" === typeof input.created_at &&
                    null !== input.created_at
                        ? $co2(input.created_at)
                        : (input.created_at as any),
            });
            const $co2: any = (input: any): any => ({
                time: input.time as any,
                zone: input.zone as any,
            });
            const $co3: any = (input: any): any => ({
                id: input.id as any,
                account:
                    "object" === typeof input.account && null !== input.account
                        ? $co4(input.account)
                        : (input.account as any),
                enterprise:
                    "object" === typeof input.enterprise &&
                    null !== input.enterprise
                        ? $co5(input.enterprise)
                        : (input.enterprise as any),
                emails: Array.isArray(input.emails)
                    ? (() => input.emails.map((elem: any) => elem as any))()
                    : (input.emails as any),
                created_at:
                    "object" === typeof input.created_at &&
                    null !== input.created_at
                        ? $co2(input.created_at)
                        : (input.created_at as any),
                authorized: input.authorized as any,
            });
            const $co4: any = (input: any): any => ({
                id: input.id as any,
                code: input.code as any,
                created_at:
                    "object" === typeof input.created_at &&
                    null !== input.created_at
                        ? $co2(input.created_at)
                        : (input.created_at as any),
            });
            const $co5: any = (input: any): any => ({
                id: input.id as any,
                account:
                    "object" === typeof input.account && null !== input.account
                        ? $co4(input.account)
                        : (input.account as any),
                name: input.name as any,
                grade: input.grade as any,
                created_at:
                    "object" === typeof input.created_at &&
                    null !== input.created_at
                        ? $co2(input.created_at)
                        : (input.created_at as any),
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        if (!is(input)) return null;
        const output: any = clone(input);
        return output;
    },
    ObjectHierarchical.SPOILERS,
);
