import typia from "typia";

type Consumer = (input: { value: number }) => { value: string };

interface ConsumerHolder {
  fn: Consumer;
}
type ConsumerFunctional = (input: ConsumerHolder) => ConsumerHolder;

export const is = typia.createIs<ConsumerHolder>();
export const validate = typia.createValidate<ConsumerHolder>();
export const functional = typia.functional.isFunction<ConsumerFunctional>(
  (input) => input,
);
export const random = typia.createRandom<ConsumerHolder>();
export const clone = typia.plain.createClone<ConsumerHolder>();
export const prune = typia.plain.createPrune<ConsumerHolder>();
export const classify = typia.plain.createClassify<ConsumerHolder>();
export const camel = typia.notations.createCamel<ConsumerHolder>();
export const pascal = typia.notations.createPascal<ConsumerHolder>();
export const equals = typia.compare.createEquals<ConsumerHolder>();
export const cover = typia.compare.createCover<ConsumerHolder>();
export const stringify = typia.json.createStringify<ConsumerHolder>();
export const jsonSchema = typia.json.schema<ConsumerHolder>();
export const jsonSchemas = typia.json.schemas<[ConsumerHolder]>();
export const jsonApplication = typia.json.application<ConsumerHolder>();
export const reflectSchema = typia.reflect.schema<ConsumerHolder>();
export const reflectSchemas = typia.reflect.schemas<[ConsumerHolder]>();
export const reflectName = typia.reflect.name<ConsumerHolder, true>();
export const llmSchema = typia.llm.schema<ConsumerHolder>({});
export const llmParameters = typia.llm.parameters<ConsumerHolder>();
export const httpFormData = typia.http.createFormData<ConsumerHolder>();
export const httpHeaders = typia.http.createHeaders<ConsumerHolder>();
export const httpQuery = typia.http.createQuery<ConsumerHolder>();
