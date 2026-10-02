/**
 * Greeting service.
 *
 * Serves friendly greetings to whoever connects to the server.
 *
 * @evidence contracts/testing.md#behavioral-verification Integration cases assert reflected class instructions, default and explicit handshake versions, parameterless hello output and void reset success.
 * @evidence contracts/testing.md#independent-expectations Authored class prose, greeting text, void declaration and server version options supply each importing case's expectations.
 * @evidence contracts/testing.md#distinguishing-cases Object and void results distinguish delivery branches; default versus explicit versions distinguish handshake option ownership.
 * @evidence contracts/testing.md#execution-ownership Native-reflected Greeter is consumed by DynamicExecutor feature exports; the fixture has no separate assertion entry.
 */
export class Greeter {
  /**
   * Say hello to the world.
   *
   * @returns The greeting message
   *
   * @evidence contracts/testing.md#behavioral-verification tool_omitted_arguments invokes hello without arguments and asserts the structured greeting and absence of tool error.
   * @evidence contracts/testing.md#independent-expectations Its authored zero-parameter signature and Hello, world! literal establish omission acceptance and expected data.
   * @evidence contracts/testing.md#distinguishing-cases This object-returning parameterless method complements reset's void output and Calculator's required numeric input.
   * @evidence contracts/testing.md#execution-ownership The named integration case invokes the native-reflected method through the registered SDK handler.
   */
  hello(): Greeter.IGreeting {
    return { message: "Hello, world!" };
  }

  /**
   * Complete an operation without a result value.
   *
   * @returns Nothing; this fixture has no mutable state
   *
   * @evidence contracts/testing.md#behavioral-verification tool_void_result invokes this empty void method and checks Success text with no structuredContent; no reset-state assertion is claimed.
   * @evidence contracts/testing.md#independent-expectations The authored void return selects the adapter's documented Success representation.
   * @evidence contracts/testing.md#distinguishing-cases Undefined return distinguishes this fixture from hello's structured object result while both omit arguments.
   * @evidence contracts/testing.md#execution-ownership DynamicExecutor's tool_void_result entry executes this reflected fixture method through the adapter.
   */
  reset(): void {}
}
export namespace Greeter {
  /**
   * Greeting produced by {@link Greeter.hello}.
   *
   * @evidence contracts/testing.md#behavioral-verification tool_omitted_arguments checks the greeting object transported as structuredContent.
   * @evidence contracts/testing.md#independent-expectations Authored required message string and hello's literal text supply the result oracle.
   * @evidence contracts/testing.md#distinguishing-cases The object result contrasts with reset's void output; malformed object-output enforcement belongs to tool_output_validation's separate fixture.
   * @evidence contracts/testing.md#execution-ownership The integration feature consumes this reflected return interface; it is not independently registered.
   */
  export interface IGreeting {
    /** Greeting sentence */
    message: string;
  }
}
