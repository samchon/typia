import typia, { tags } from "typia";
interface ISomething {
    id: string & tags.Format<"uuid">;
    beta: number[];
    gamma: bigint;
}
export const query = typia.http.createQuery<ISomething>();
export const isQuery = typia.http.createIsQuery<ISomething>();
export const assertQuery = typia.http.createAssertQuery<ISomething>();
export const validateQuery = typia.http.createValidateQuery<ISomething>();
