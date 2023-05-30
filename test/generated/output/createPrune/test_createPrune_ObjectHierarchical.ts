import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";
export const test_createPrune_ObjectHierarchical = _test_prune("ObjectHierarchical", ObjectHierarchical.generate, (input: ObjectHierarchical): void => {
    const $io1 = (input: any): boolean => "number" === typeof input.id && "string" === typeof input.code && "string" === typeof input.name && "number" === typeof input.sequence && "boolean" === typeof input.exclusive && "number" === typeof input.priority && ("object" === typeof input.created_at && null !== input.created_at && $io2(input.created_at));
    const $io2 = (input: any): boolean => "number" === typeof input.time && "number" === typeof input.zone;
    const $io3 = (input: any): boolean => "number" === typeof input.id && ("object" === typeof input.account && null !== input.account && $io4(input.account)) && (null === input.enterprise || "object" === typeof input.enterprise && null !== input.enterprise && $io5(input.enterprise)) && (Array.isArray(input.emails) && input.emails.every((elem: any) => "string" === typeof elem)) && ("object" === typeof input.created_at && null !== input.created_at && $io2(input.created_at)) && "boolean" === typeof input.authorized;
    const $io4 = (input: any): boolean => "number" === typeof input.id && "string" === typeof input.code && ("object" === typeof input.created_at && null !== input.created_at && $io2(input.created_at));
    const $io5 = (input: any): boolean => "number" === typeof input.id && ("object" === typeof input.account && null !== input.account && $io4(input.account)) && "string" === typeof input.name && "number" === typeof input.grade && ("object" === typeof input.created_at && null !== input.created_at && $io2(input.created_at));
    const $po0 = (input: any): any => {
        if ("object" === typeof input.channel && null !== input.channel)
            $po1(input.channel);
        if ("object" === typeof input.member && null !== input.member)
            $po3(input.member);
        if ("object" === typeof input.account && null !== input.account)
            $po4(input.account);
        if ("object" === typeof input.created_at && null !== input.created_at)
            $po2(input.created_at);
        for (const key of Object.keys(input)) {
            if ("id" === key || "channel" === key || "member" === key || "account" === key || "href" === key || "referrer" === key || "ip" === key || "created_at" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any): any => {
        if ("object" === typeof input.created_at && null !== input.created_at)
            $po2(input.created_at);
        for (const key of Object.keys(input)) {
            if ("id" === key || "code" === key || "name" === key || "sequence" === key || "exclusive" === key || "priority" === key || "created_at" === key)
                continue;
            delete input[key];
        }
    };
    const $po2 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("time" === key || "zone" === key)
                continue;
            delete input[key];
        }
    };
    const $po3 = (input: any): any => {
        if ("object" === typeof input.account && null !== input.account)
            $po4(input.account);
        if ("object" === typeof input.enterprise && null !== input.enterprise)
            $po5(input.enterprise);
        if ("object" === typeof input.created_at && null !== input.created_at)
            $po2(input.created_at);
        for (const key of Object.keys(input)) {
            if ("id" === key || "account" === key || "enterprise" === key || "emails" === key || "created_at" === key || "authorized" === key)
                continue;
            delete input[key];
        }
    };
    const $po4 = (input: any): any => {
        if ("object" === typeof input.created_at && null !== input.created_at)
            $po2(input.created_at);
        for (const key of Object.keys(input)) {
            if ("id" === key || "code" === key || "created_at" === key)
                continue;
            delete input[key];
        }
    };
    const $po5 = (input: any): any => {
        if ("object" === typeof input.account && null !== input.account)
            $po4(input.account);
        if ("object" === typeof input.created_at && null !== input.created_at)
            $po2(input.created_at);
        for (const key of Object.keys(input)) {
            if ("id" === key || "account" === key || "name" === key || "grade" === key || "created_at" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
});
