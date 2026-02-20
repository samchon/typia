export type SpecialFields<Instance extends object, Target> = {
  [P in keyof Instance]: Instance[P] extends Target ? P : never;
}[keyof Instance & string];
