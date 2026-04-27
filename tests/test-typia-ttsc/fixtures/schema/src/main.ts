import typia, { tags } from "typia";
interface Member { id: string; email: string & tags.Format<"email">; age: number & tags.Minimum<0>; }
interface Upload { file: Blob; optional?: string | null; }
interface Service {
  upload(input: Upload): Promise<Upload>;
  ignored?: ((input: { value: string }) => void) | null;
}
export const memberSchema = typia.json.schema<Member>();
export const stringSchema = typia.json.schema<string>();
export const uploadSchemaV30 = typia.json.schema<Upload, "3.0">();
export const collectionV30 = typia.json.schemas<[Member, Upload], "3.0">();
export const applicationV30 = typia.json.application<Service, "3.0">();
