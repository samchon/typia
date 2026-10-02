/**
 * Greeting service.
 *
 * Serves friendly greetings through zero-parameter tools.
 *
 * @evidence contracts/testing.md#behavioral-verification This fixture supplies hello's fixed object result; tool_omitted_arguments asserts the complete successful greeting when execute receives undefined arguments.
 * @evidence contracts/testing.md#independent-expectations The authored Hello, world! literal and zero-parameter signature establish the expected result and omission boundary independently of reflection.
 * @evidence contracts/testing.md#distinguishing-cases The no-argument method is the boundary twin of Calculator's required operands; it owns no separate assertions or malformed-required-argument scenario.
 * @evidence contracts/testing.md#execution-ownership test_vercel_tool_omitted_arguments reflects and executes hello in the integration runner; the class, method and IGreeting support that registered case.
 */
export class Greeter {
  /**
   * Say hello to the world.
   *
   * @returns The greeting message
   *
   * @evidence contracts/testing.md#behavioral-verification This fixture method returns the fixed greeting; tool_omitted_arguments compares the complete success/data result after undefined arguments.
   * @evidence contracts/testing.md#independent-expectations Its authored Hello, world! literal establishes the expected greeting independently of reflection.
   * @evidence contracts/testing.md#distinguishing-cases The zero-parameter signature permits omitted arguments; required Calculator argument failures are complementary cases.
   * @evidence contracts/testing.md#execution-ownership test_vercel_tool_omitted_arguments reflects and executes this method in the integration runner; hello owns no test assertions.
   */
  hello(): Greeter.IGreeting {
    return { message: "Hello, world!" };
  }
}
export namespace Greeter {
  /**
   * Greeting produced by {@link Greeter.hello}.
   *
   * @evidence contracts/testing.md#behavioral-verification This fixture type defines the greeting result; tool_omitted_arguments asserts the returned object in its success envelope.
   * @evidence contracts/testing.md#independent-expectations Required message:string and the authored hello literal establish the result oracle before native generation.
   * @evidence contracts/testing.md#distinguishing-cases A meaningful object result distinguishes greeting success from the separate void result case.
   * @evidence contracts/testing.md#execution-ownership Greeter's reflected method references this fixture type; the omitted-arguments integration case owns its assertions.
   */
  export interface IGreeting {
    /** Greeting sentence */
    message: string;
  }
}
