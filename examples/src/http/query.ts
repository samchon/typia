import typia from "typia";

interface IQuery {
  limit?: number;
  enforce: boolean;
  values?: string[];
  atomic: string | null;
  indexes: number[];
}
typia.http.createQuery<IQuery>();
