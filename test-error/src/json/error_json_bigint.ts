import typia from "typia";

interface IPointer<T> {
  value: T;
}

// JSON SCHEMA
typia.json.application<[bigint]>();
typia.json.application<[[bigint, bigint]]>();
typia.json.application<[bigint[]]>();
typia.json.application<[Record<string, bigint>]>();
typia.json.application<[IPointer<bigint>]>();
typia.json.application<[IPointer<[bigint, bigint]>]>();
typia.json.application<[IPointer<bigint[]>]>();
typia.json.application<[IPointer<Record<string, bigint>>]>();

// ENCODE
typia.json.createStringify<bigint>();
typia.json.createStringify<[bigint, bigint]>();
typia.json.createStringify<bigint[]>();
typia.json.createStringify<Record<string, bigint>>();
typia.json.createStringify<IPointer<bigint>>();
typia.json.createStringify<IPointer<[bigint, bigint]>>();
typia.json.createStringify<IPointer<bigint[]>>();
typia.json.createStringify<IPointer<Record<string, bigint>>>();

// DECODE
typia.json.createAssertParse<bigint>();
typia.json.createAssertParse<[bigint, bigint]>();
typia.json.createAssertParse<bigint[]>();
typia.json.createAssertParse<Record<string, bigint>>();
typia.json.createAssertParse<IPointer<bigint>>();
typia.json.createAssertParse<IPointer<[bigint, bigint]>>();
typia.json.createAssertParse<IPointer<bigint[]>>();
typia.json.createAssertParse<IPointer<Record<string, bigint>>>();
