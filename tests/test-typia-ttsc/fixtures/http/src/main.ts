import typia from "typia";

interface Query {
  page: number;
  size: number;
  tag: string[];
  sort?: string;
}
export const parseQuery = (
  input: URLSearchParams | Record<string, any>,
): Query => typia.http.query<Query>(input as any);
export const parseIntParam = (input: string): number =>
  typia.http.parameter<number>(input);
