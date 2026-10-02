import { OpenApi, OpenApiV3_1 } from "@typia/interface";
import { OpenApiConverter, Singleton } from "@typia/utils";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import typia from "typia";

/**
 * Integration-runner flags and optional live-provider experiment inputs.
 *
 * Only flag parsing is used by the automated runner. Environment and hosted
 * document loading are lazy manual-experiment helpers, not hermetic test
 * cases.
 *
 * @evidence contracts/testing.md#behavioral-verification This support namespace owns no assertions; getArguments selects discovered integration cases, while getEnvironments and getSwagger supply optional manual experiment inputs.
 * @evidence contracts/testing.md#independent-expectations Case assertions have their own authored oracles; this namespace does not establish expected model answers or certify its fetched OpenAPI document.
 * @evidence contracts/testing.md#distinguishing-cases The runner's absent and repeated flag forms select cases, whereas the two lazy initializers are manual-only and do not expand automated coverage.
 * @evidence contracts/testing.md#execution-ownership src/index.ts calls getArguments; experimental/tool-calling.ts and structured-output.ts call getEnvironments through explicit package scripts. getSwagger is currently unused, and no helper is registered as a test case.
 */
export namespace TestGlobal {
  /**
   * Loads and expands dotenv once for a manual provider experiment, then
   * validates the optional provider key in process.env.
   *
   * @evidence contracts/testing.md#behavioral-verification This manual support read initializes dotenv and asserts an optional string key, but owns no regression assertions or model-answer checks.
   * @evidence contracts/testing.md#independent-expectations IEnvironments supplies the optional string shape; no provider response is used as an expected automated result.
   * @evidence contracts/testing.md#distinguishing-cases Absent or string-valued provider key fits the declared manual input; Singleton retains initialization and process.env effects rather than isolating them as test fixtures.
   * @evidence contracts/testing.md#execution-ownership The two experimental scripts call this helper; automated unit and integration cases never call it. Its initializer and IEnvironments are reviewed with this support owner.
   */
  export const getEnvironments = (): IEnvironments => environments.get();

  /**
   * Fetches and upgrades the hosted shopping OpenAPI document once for manual
   * provider experiments. Repeated reads share the same promise, including
   * rejection.
   *
   * @evidence contracts/testing.md#behavioral-verification This optional support read fetches JSON and upgrades an OpenAPI document; no caller currently executes it and it contains no regression assertions.
   * @evidence contracts/testing.md#independent-expectations The hosted document is a manual input, not an independent expected result; the helper assumes its shape and does not separately validate HTTP status or document structure.
   * @evidence contracts/testing.md#distinguishing-cases Singleton retains the same document promise, including rejection; this reuse is implementation behavior, not evidence that cold/rejected fetch scenarios are tested.
   * @evidence contracts/testing.md#execution-ownership No automated or experimental caller currently calls getSwagger. Its private fetch initializer is reviewed here without claiming network execution by either runner.
   */
  export const getSwagger = (): Promise<OpenApi.IDocument> => swagger.get();

  /**
   * Reads one value per occurrence of the requested double-dash flag. Missing
   * flags return an empty list.
   *
   * @evidence contracts/testing.md#behavioral-verification This runner support scan owns no assertions; it supplies include/exclude values to the integration runner without swallowing any selected case failure.
   * @evidence contracts/testing.md#independent-expectations Complete --key spelling and the following argv value define its input contract. Case expectations remain in the selected test functions.
   * @evidence contracts/testing.md#distinguishing-cases Absent flags yield no filter, repeated flags preserve order, and a trailing flag without a value contributes nothing; this comment describes actual logic rather than claiming dedicated parsing coverage.
   * @evidence contracts/testing.md#execution-ownership src/index.ts calls this support function before DynamicExecutor discovery; it is not itself a registered case and does not initialize the lazy environment or hosted document helpers.
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
