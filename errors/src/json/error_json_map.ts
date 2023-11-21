import typia from "typia";

interface IPointer<T> {
  value: T;
}

// JSON SCHEMA
typia.json.application<[Map<any, any>]>();
typia.json.application<[[Map<any, any>, Map<any, any>]]>();
typia.json.application<[Map<any, any>[]]>();
typia.json.application<[Record<string, Map<any, any>>]>();
typia.json.application<[IPointer<Map<any, any>>]>();
typia.json.application<[IPointer<[Map<any, any>, Map<any, any>]>]>();
typia.json.application<[IPointer<Map<any, any>[]>]>();
typia.json.application<[IPointer<Record<string, Map<any, any>>>]>();

// ENCODE
typia.json.createStringify<Map<any, any>>();
typia.json.createStringify<[Map<any, any>, Map<any, any>]>();
typia.json.createStringify<Map<any, any>[]>();
typia.json.createStringify<Record<string, Map<any, any>>>();
typia.json.createStringify<IPointer<Map<any, any>>>();
typia.json.createStringify<IPointer<[Map<any, any>, Map<any, any>]>>();
typia.json.createStringify<IPointer<Map<any, any>[]>>();
typia.json.createStringify<IPointer<Record<string, Map<any, any>>>>();

// DECODE
typia.json.createAssertParse<Map<any, any>>();
typia.json.createAssertParse<[Map<any, any>, Map<any, any>]>();
typia.json.createAssertParse<Map<any, any>[]>();
typia.json.createAssertParse<Record<string, Map<any, any>>>();
typia.json.createAssertParse<IPointer<Map<any, any>>>();
typia.json.createAssertParse<IPointer<[Map<any, any>, Map<any, any>]>>();
typia.json.createAssertParse<IPointer<Map<any, any>[]>>();
typia.json.createAssertParse<IPointer<Record<string, Map<any, any>>>>();
