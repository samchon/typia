import typia from "typia";

typia.json.createStringify<{
  value: bigint;
}>();

typia.json.createStringify<Array<string | undefined>>();

typia.json.createStringify<{
  values: Set<string>;
}>();

typia.json.createStringify<{
  values: Map<string, number>;
}>();

typia.llm.parameters<
  | {
      alpha: string;
    }
  | {
      beta: number;
    }
>();

typia.llm.parameters<
  Record<string, string>,
  {
    strict: true;
  }
>();

typia.llm.application<{
  numeric(value: number): void;
}>();

typia.http.parameter<any>("" as any);

typia.http.parameter<string | number>("" as any);

typia.http.query<{
  file: Blob;
}>({} as any);

typia.http.query<{
  value: {
    nested: string;
  };
}>({} as any);

typia.http.query<{
  values: Array<string | number>;
}>({} as any);

typia.http.headers<{
  value: number | string;
}>({} as any);

typia.http.headers<{
  value: number[][];
}>({} as any);

typia.http.headers<{
  value: [string, string];
}>({} as any);

typia.http.headers<{
  value: number | null;
}>({} as any);

typia.http.headers<{
  value: {
    nested: number;
  };
}>({} as any);

typia.http.headers<{
  "set-cookie": string;
}>({} as any);

typia.http.headers<{
  age: string[];
}>({} as any);

typia.http.headers<{
  something: boolean;
  sOmething: number;
}>({} as any);

function reflectGeneric<T>(): unknown {
  return typia.reflect.schema<T>();
}

reflectGeneric<string>();

type ReflectSchemasAlias = [string, number];

typia.reflect.schemas<ReflectSchemasAlias>();

typia.protobuf.createAssertEncode<{
  created: Date;
}>();
