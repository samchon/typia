/**
 * Greeting service.
 *
 * Serves friendly greetings through zero-parameter tools.
 */
export class Greeter {
  /**
   * Say hello to the world.
   *
   * @returns The greeting message
   */
  hello(): Greeter.IGreeting {
    return { message: "Hello, world!" };
  }
}
export namespace Greeter {
  /** Greeting produced by {@link Greeter.hello}. */
  export interface IGreeting {
    /** Greeting sentence */
    message: string;
  }
}
