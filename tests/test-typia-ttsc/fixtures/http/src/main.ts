import typia from "typia";
interface Query { page: number; size: number; tag: string[]; sort?: string; }
type Box<T> = T;
interface AliasQuery { keyword: Box<string>; limit?: Box<number>; }
interface UploadForm {
  title: string;
  count: number;
  active: boolean;
  files: File[];
  optional?: string;
}
interface HeaderInput {
  age: number;
  active: boolean;
  cookie: string[];
  "x-tags": string[];
  "set-cookie": string[];
}
export const parseQuery = (input: URLSearchParams | Record<string, any>): Query =>
  typia.http.query<Query>(input as any);
export const parseAliasQuery = (
  input: URLSearchParams | Record<string, any>,
): AliasQuery => typia.http.query<AliasQuery>(input as any);
export const parseIntParam = (input: string): number =>
  typia.http.parameter<number>(input);
export const parseBoolParam = (input: string): boolean =>
  typia.http.parameter<boolean>(input);
export const parseBigintParam = (input: string): bigint =>
  typia.http.parameter<bigint>(input);
export const parseLiteralParam = typia.http.createParameter<3>();
export const parseHeaders = (
  input: Record<string, string | string[] | undefined>,
): typia.Resolved<HeaderInput> => typia.http.headers<HeaderInput>(input);
export const parseFormData = (input: FormData): typia.Resolved<UploadForm> =>
  typia.http.formData<UploadForm>(input);
export const assertFormData = (input: FormData): typia.Resolved<UploadForm> =>
  typia.http.assertFormData<UploadForm>(input);
export const isFormData = (input: FormData): typia.Resolved<UploadForm> | null =>
  typia.http.isFormData<UploadForm>(input);
