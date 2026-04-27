import typia from "typia";
interface Query { page: number; size: number; tag: string[]; sort?: string; }
interface UploadForm {
  title: string;
  count: number;
  active: boolean;
  files: File[];
  optional?: string;
}
export const parseQuery = (input: URLSearchParams | Record<string, any>): Query =>
  typia.http.query<Query>(input as any);
export const parseIntParam = (input: string): number =>
  typia.http.parameter<number>(input);
export const parseLiteralParam = typia.http.createParameter<3>();
export const parseFormData = (input: FormData): typia.Resolved<UploadForm> =>
  typia.http.formData<UploadForm>(input);
export const assertFormData = (input: FormData): typia.Resolved<UploadForm> =>
  typia.http.assertFormData<UploadForm>(input);
export const isFormData = (input: FormData): typia.Resolved<UploadForm> | null =>
  typia.http.isFormData<UploadForm>(input);
