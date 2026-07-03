/**
 * Greeting service.
 *
 * Serves friendly greetings to whoever connects to the server.
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

  /**
   * Reset the greeter's state.
   *
   * @returns Nothing; the reset is a side effect
   */
  reset(): void {}
}
export namespace Greeter {
  /** Greeting produced by {@link Greeter.hello}. */
  export interface IGreeting {
    /** Greeting sentence */
    message: string;
  }
}
