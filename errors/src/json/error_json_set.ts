import typia from "typia";

interface IPointer<T> {
    value: T;
}

// JSON SCHEMA
typia.json.application<[Set<any>]>();
typia.json.application<[[Set<any>, Set<any>]]>();
typia.json.application<[Set<any>[]]>();
typia.json.application<[Record<string, Set<any>>]>();
typia.json.application<[IPointer<Set<any>>]>();
typia.json.application<[IPointer<[Set<any>, Set<any>]>]>();
typia.json.application<[IPointer<Set<any>[]>]>();
typia.json.application<[IPointer<Record<string, Set<any>>>]>();

// ENCODE
typia.json.createStringify<Set<any>>();
typia.json.createStringify<[Set<any>, Set<any>]>();
typia.json.createStringify<Set<any>[]>();
typia.json.createStringify<Record<string, Set<any>>>();
typia.json.createStringify<IPointer<Set<any>>>();
typia.json.createStringify<IPointer<[Set<any>, Set<any>]>>();
typia.json.createStringify<IPointer<Set<any>[]>>();
typia.json.createStringify<IPointer<Record<string, Set<any>>>>();

// DECODE
typia.json.createAssertParse<Set<any>>();
typia.json.createAssertParse<[Set<any>, Set<any>]>();
typia.json.createAssertParse<Set<any>[]>();
typia.json.createAssertParse<Record<string, Set<any>>>();
typia.json.createAssertParse<IPointer<Set<any>>>();
typia.json.createAssertParse<IPointer<[Set<any>, Set<any>]>>();
typia.json.createAssertParse<IPointer<Set<any>[]>>();
typia.json.createAssertParse<IPointer<Record<string, Set<any>>>>();
