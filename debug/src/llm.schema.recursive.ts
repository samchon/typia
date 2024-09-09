import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

const schema: ILlmSchema = typia.llm.schema<Date>();
console.log(schema);
