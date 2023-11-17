import typia from "typia";

interface ISomething {
  anys: any[];
  numbers: number[];
  strings: string[];
  undefindable: any[] | undefined;
  nullables: any[] | null;
  both: any[] | undefined | null;
  union: Array<any | number | null | undefined>;
}

typia.json.createStringify<ISomething>();
typia.json.createStringify<any[]>();
typia.json.createStringify<any[] | null>();
typia.json.createStringify<any[] | undefined>();
typia.json.createStringify<any[] | undefined | null>();
