export class Singleton<T, Args extends any[] = []> {
  private readonly closure_: (...args: Args) => T;
  private value_: T | object;

  public constructor(closure: (...args: Args) => T) {
    this.closure_ = closure;
    this.value_ = NOT_MOUNTED_YET;
  }

  public get(...args: Args): T {
    if (this.value_ === NOT_MOUNTED_YET) this.value_ = this.closure_(...args);
    return this.value_ as T;
  }
}

const NOT_MOUNTED_YET = {};
