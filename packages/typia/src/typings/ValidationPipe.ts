export type ValidationPipe<T, E> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      errors: E[];
    };
