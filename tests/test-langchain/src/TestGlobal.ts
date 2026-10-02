import { OpenApi, OpenApiV3_1 } from "@typia/interface";
import { OpenApiConverter, Singleton } from "@typia/utils";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import typia from "typia";

export namespace TestGlobal {
  /**
   * Loads and expands dotenv once for a manual provider experiment, then
   * validates the optional provider key in process.env.
   *
   * @evidence contracts/common.md#principled-implementation The singleton initializer loads dotenv, expands substitutions and passes process.env to the declared optional-string assertion. It validates that shape without copying or reverting the environment mutations owned by dotenv.
   * @evidence contracts/common.md#clear-and-simple-design A fixed singleton keeps initialization and the exported read separate; its initializer owns dotenv and assertion effects, and subsequent reads reuse the same environment object.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts dotenv uses its supported configuration/expansion APIs; no foreign method or global is replaced. process.env changes are the explicit purpose of this manual experiment setup.
   * @evidence contracts/common.md#meaningful-documentation The native comment identifies manual provider use, first-read effects and the optional provider key shape. It does not claim to execute as a DynamicExecutor test.
   */
  export const getEnvironments = (): IEnvironments => environments.get();

  /**
   * Fetches and upgrades the hosted shopping OpenAPI document once for manual
   * provider experiments. Repeated reads share the same promise, including
   * rejection.
   *
   * @evidence contracts/common.md#principled-implementation The singleton fetches the authored endpoint, parses its JSON and delegates version conversion to OpenApiConverter. It assumes the endpoint returns an OpenAPI document; HTTP status and document structure are not separately validated here.
   * @evidence contracts/common.md#clear-and-simple-design One exported read delegates one fixed-document promise to the singleton. The private initializer owns network, JSON parsing and conversion without duplicating the converter.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The fixed URL is the actual experiment input rather than an expected test output. Fetch and conversion use public APIs without patching a provider or selecting a result by fixture name.
   * @evidence contracts/common.md#meaningful-documentation The native prose identifies the external document, manual-use purpose, promise reuse and retained rejection; it makes no claim of hermetic test execution.
   */
  export const getSwagger = (): Promise<OpenApi.IDocument> => swagger.get();

  /**
   * Reads one value per occurrence of the requested double-dash flag. Missing
   * flags return an empty list.
   *
   * @evidence contracts/common.md#principled-implementation The argv scan collects one following argument for each occurrence of the requested flag, preserving occurrence order. It does not treat a sequence of unprefixed words as several filter values.
   * @evidence contracts/common.md#clear-and-simple-design One loop owns flag recognition and the result array; advancing past each consumed value keeps it from being interpreted as another flag.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The requested key is compared with its complete double-dash spelling; no fixture or test outcome affects parsing.
   * @evidence contracts/common.md#meaningful-documentation Native prose explains one-value-per-occurrence filtering and the absent-flag empty result, rather than claiming this runner helper is a behavioral test.
   */
  export const getArguments = (key: string): string[] => {
    const values: string[] = [];
    for (let i = 0; i < process.argv.length; i++) {
      const arg = process.argv[i];
      if (arg === `--${key}` && i + 1 < process.argv.length) {
        values.push(process.argv[++i]!);
      }
    }
    return values;
  };
}

const swagger = new Singleton(async () => {
  const response: Response = await fetch(
    "https://raw.githubusercontent.com/samchon/shopping-backend/refs/heads/master/packages/api/swagger.json",
  );
  const document: OpenApiV3_1.IDocument = await response.json();
  return OpenApiConverter.upgradeDocument(document);
});

interface IEnvironments {
  OPENROUTER_API_KEY?: string;
}

const environments = new Singleton(() => {
  const env = dotenv.config();
  dotenvExpand.expand(env);
  return typia.assert<IEnvironments>(process.env);
});
