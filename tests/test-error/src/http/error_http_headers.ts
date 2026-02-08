import typia from "typia";

interface IPointer<T> {
  value: T;
}
type IArray<Key extends string> = {
  [P in Key]: string[];
};

// spellchecker:off
interface ISomething {
  something: boolean;
  sOmething: bigint;
  soMething: number;
  someEthing: string;
}
// spellchecker:on

typia.http.createHeaders<ISomething>();
typia.http.createHeaders<IPointer<number | string>>();
typia.http.createHeaders<IPointer<number[][]>>();
typia.http.createHeaders<IPointer<[string, string]>>();
typia.http.createHeaders<IPointer<number | null>>();
typia.http.createHeaders<IPointer<IPointer<number>>>();

typia.http.createHeaders<{
  "set-cookie": string;
}>();
typia.http.createHeaders<IArray<"age">>();
typia.http.createHeaders<IArray<"authorization">>();
typia.http.createHeaders<IArray<"content-length">>();
typia.http.createHeaders<IArray<"content-type">>();
typia.http.createHeaders<IArray<"etag">>();
typia.http.createHeaders<IArray<"expires">>();
typia.http.createHeaders<IArray<"from">>();
typia.http.createHeaders<IArray<"host">>();
typia.http.createHeaders<IArray<"if-modified-since">>();
typia.http.createHeaders<IArray<"if-unmodified-since">>();
typia.http.createHeaders<IArray<"last-modified">>();
typia.http.createHeaders<IArray<"location">>();
typia.http.createHeaders<IArray<"max-forwards">>();
typia.http.createHeaders<IArray<"proxy-authorization">>();
typia.http.createHeaders<IArray<"referer">>();
typia.http.createHeaders<IArray<"retry-after">>();
typia.http.createHeaders<IArray<"server">>();
typia.http.createHeaders<IArray<"user-agent">>();
