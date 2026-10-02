import typia from "typia";

declare const callableBrand: unique symbol;
type CallableWrapper<T> = {
  payload: T;
};
type Assert<T extends true> = T;
type Same<X, Y> = [X] extends [Y] ? ([Y] extends [X] ? true : false) : false;
interface PureCallInterface {
  (value: number): string;
}
type PureCallLiteral = {
  (value: number): string;
};
type PureCallAlias = (value: number) => string;
type _PureCallLiteralTwin = Assert<Same<PureCallInterface, PureCallLiteral>>;
type _PureCallInlineTwin = Assert<
  Same<
    PureCallInterface,
    {
      (value: number): string;
    }
  >
>;
type _PureCallAliasTwin = Assert<Same<PureCallInterface, PureCallAlias>>;
interface PureConstructInterface {
  new (value: number): {
    value: number;
  };
}
type PureConstructLiteral = {
  new (value: number): {
    value: number;
  };
};
type PureConstructAlias = new (value: number) => {
  value: number;
};
type _PureConstructLiteralTwin = Assert<
  Same<PureConstructInterface, PureConstructLiteral>
>;
type _PureConstructInlineTwin = Assert<
  Same<
    PureConstructInterface,
    {
      new (value: number): {
        value: number;
      };
    }
  >
>;
type _PureConstructAliasTwin = Assert<
  Same<PureConstructInterface, PureConstructAlias>
>;
interface OverloadInterface {
  (value: number): string;
  (value: string): number;
}
type OverloadLiteral = {
  (value: number): string;
  (value: string): number;
};
type _OverloadLiteralTwin = Assert<Same<OverloadInterface, OverloadLiteral>>;
type _OverloadInlineTwin = Assert<
  Same<
    OverloadInterface,
    {
      (value: number): string;
      (value: string): number;
    }
  >
>;
type _OverloadIntersectionTwin = Assert<
  Same<
    OverloadInterface,
    ((value: number) => string) & ((value: string) => number)
  >
>;
interface ConstructOverloadInterface {
  new (value: number): {
    value: number;
  };
  new (value: string): {
    value: string;
  };
}
type ConstructOverloadLiteral = {
  new (value: number): {
    value: number;
  };
  new (value: string): {
    value: string;
  };
};
type _ConstructOverloadLiteralTwin = Assert<
  Same<ConstructOverloadInterface, ConstructOverloadLiteral>
>;
type _ConstructOverloadInlineTwin = Assert<
  Same<
    ConstructOverloadInterface,
    {
      new (value: number): {
        value: number;
      };
      new (value: string): {
        value: string;
      };
    }
  >
>;
type _ConstructOverloadIntersectionTwin = Assert<
  Same<
    ConstructOverloadInterface,
    (new (value: number) => {
      value: number;
    }) &
      (new (value: string) => {
        value: string;
      })
  >
>;
interface CallAndConstructInterface {
  (value: number): string;
  new (value: number): {
    value: number;
  };
}
type CallAndConstructLiteral = {
  (value: number): string;
  new (value: number): {
    value: number;
  };
};
type _CallAndConstructLiteralTwin = Assert<
  Same<CallAndConstructInterface, CallAndConstructLiteral>
>;
type _CallAndConstructInlineTwin = Assert<
  Same<
    CallAndConstructInterface,
    {
      (value: number): string;
      new (value: number): {
        value: number;
      };
    }
  >
>;
type _CallAndConstructIntersectionTwin = Assert<
  Same<
    CallAndConstructInterface,
    ((value: number) => string) &
      (new (value: number) => {
        value: number;
      })
  >
>;
interface MethodInterface {
  (value: number): string;
  method(): void;
}
type MethodLiteral = {
  (value: number): string;
  method(): void;
};
type _MethodLiteralTwin = Assert<Same<MethodInterface, MethodLiteral>>;
type _MethodInlineTwin = Assert<
  Same<
    MethodInterface,
    {
      (value: number): string;
      method(): void;
    }
  >
>;
type _MethodIntersectionTwin = Assert<
  Same<
    MethodInterface,
    ((value: number) => string) & {
      method(): void;
    }
  >
>;
type _MethodMemberTwin = Assert<Same<MethodInterface, MethodPropertyInterface>>;
interface MethodPropertyInterface {
  (value: number): string;
  method: () => void;
}
type MethodPropertyLiteral = {
  (value: number): string;
  method: () => void;
};
type _MethodPropertyLiteralTwin = Assert<
  Same<MethodPropertyInterface, MethodPropertyLiteral>
>;
type _MethodPropertyInlineTwin = Assert<
  Same<
    MethodPropertyInterface,
    {
      (value: number): string;
      method: () => void;
    }
  >
>;
type _MethodPropertyIntersectionTwin = Assert<
  Same<
    MethodPropertyInterface,
    ((value: number) => string) & {
      method: () => void;
    }
  >
>;
type _MethodPropertyMemberTwin = Assert<
  Same<MethodPropertyInterface, MethodInterface>
>;
interface OptionalMethodInterface {
  (value: number): string;
  method?(): void;
}
type OptionalMethodLiteral = {
  (value: number): string;
  method?(): void;
};
type _OptionalMethodLiteralTwin = Assert<
  Same<OptionalMethodInterface, OptionalMethodLiteral>
>;
type _OptionalMethodInlineTwin = Assert<
  Same<
    OptionalMethodInterface,
    {
      (value: number): string;
      method?(): void;
    }
  >
>;
type _OptionalMethodIntersectionTwin = Assert<
  Same<
    OptionalMethodInterface,
    ((value: number) => string) & {
      method?(): void;
    }
  >
>;
type _OptionalMethodMemberTwin = Assert<
  Same<OptionalMethodInterface, OptionalMethodPropertyInterface>
>;
interface OptionalMethodPropertyInterface {
  (value: number): string;
  method?: () => void;
}
type OptionalMethodPropertyLiteral = {
  (value: number): string;
  method?: () => void;
};
type _OptionalMethodPropertyLiteralTwin = Assert<
  Same<OptionalMethodPropertyInterface, OptionalMethodPropertyLiteral>
>;
type _OptionalMethodPropertyInlineTwin = Assert<
  Same<
    OptionalMethodPropertyInterface,
    {
      (value: number): string;
      method?: () => void;
    }
  >
>;
type _OptionalMethodPropertyIntersectionTwin = Assert<
  Same<
    OptionalMethodPropertyInterface,
    ((value: number) => string) & {
      method?: () => void;
    }
  >
>;
type _OptionalMethodPropertyMemberTwin = Assert<
  Same<OptionalMethodPropertyInterface, OptionalMethodInterface>
>;
interface SymbolMemberInterface {
  (value: number): string;
  [callableBrand]: string;
}
type SymbolMemberLiteral = {
  (value: number): string;
  [callableBrand]: string;
};
type _SymbolMemberLiteralTwin = Assert<
  Same<SymbolMemberInterface, SymbolMemberLiteral>
>;
type _SymbolMemberInlineTwin = Assert<
  Same<
    SymbolMemberInterface,
    {
      (value: number): string;
      [callableBrand]: string;
    }
  >
>;
type _SymbolMemberIntersectionTwin = Assert<
  Same<
    SymbolMemberInterface,
    ((value: number) => string) & {
      [callableBrand]: string;
    }
  >
>;
interface OptionalSymbolMemberInterface {
  (value: number): string;
  readonly [callableBrand]?: never;
}
type OptionalSymbolMemberLiteral = {
  (value: number): string;
  readonly [callableBrand]?: never;
};
type _OptionalSymbolMemberLiteralTwin = Assert<
  Same<OptionalSymbolMemberInterface, OptionalSymbolMemberLiteral>
>;
type _OptionalSymbolMemberInlineTwin = Assert<
  Same<
    OptionalSymbolMemberInterface,
    {
      (value: number): string;
      readonly [callableBrand]?: never;
    }
  >
>;
type _OptionalSymbolMemberIntersectionTwin = Assert<
  Same<
    OptionalSymbolMemberInterface,
    ((value: number) => string) & {
      readonly [callableBrand]?: never;
    }
  >
>;
interface OptionalMemberInterface {
  (value: number): string;
  label?: string;
}
type OptionalMemberLiteral = {
  (value: number): string;
  label?: string;
};
type _OptionalMemberLiteralTwin = Assert<
  Same<OptionalMemberInterface, OptionalMemberLiteral>
>;
type _OptionalMemberInlineTwin = Assert<
  Same<
    OptionalMemberInterface,
    {
      (value: number): string;
      label?: string;
    }
  >
>;
type _OptionalMemberIntersectionTwin = Assert<
  Same<
    OptionalMemberInterface,
    ((value: number) => string) & {
      label?: string;
    }
  >
>;
interface RequiredMemberInterface {
  (value: number): string;
  label: string;
}
type RequiredMemberLiteral = {
  (value: number): string;
  label: string;
};
type _RequiredMemberLiteralTwin = Assert<
  Same<RequiredMemberInterface, RequiredMemberLiteral>
>;
type _RequiredMemberInlineTwin = Assert<
  Same<
    RequiredMemberInterface,
    {
      (value: number): string;
      label: string;
    }
  >
>;
type _RequiredMemberIntersectionTwin = Assert<
  Same<
    RequiredMemberInterface,
    ((value: number) => string) & {
      label: string;
    }
  >
>;
interface IndexSignatureInterface {
  (value: number): string;
  [key: string]: unknown;
}
type IndexSignatureLiteral = {
  (value: number): string;
  [key: string]: unknown;
};
type _IndexSignatureLiteralTwin = Assert<
  Same<IndexSignatureInterface, IndexSignatureLiteral>
>;
type _IndexSignatureInlineTwin = Assert<
  Same<
    IndexSignatureInterface,
    {
      (value: number): string;
      [key: string]: unknown;
    }
  >
>;
type _IndexSignatureIntersectionTwin = Assert<
  Same<
    IndexSignatureInterface,
    ((value: number) => string) & {
      [key: string]: unknown;
    }
  >
>;
const directPureCallInterfaceTop = (input: unknown): boolean =>
  typia.is<PureCallInterface>(input);
const factoryPureCallInterfaceTop = typia.createIs<PureCallInterface>();
const directPureCallInterfaceNested = (input: unknown): boolean =>
  typia.is<{
    fn: PureCallInterface;
  }>(input);
const factoryPureCallInterfaceNested = typia.createIs<{
  fn: PureCallInterface;
}>();
const directPureCallInterfaceOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: PureCallInterface;
  }>(input);
const factoryPureCallInterfaceOptionalProperty = typia.createIs<{
  fn?: PureCallInterface;
}>();
const directPureCallInterfaceUnionArm = (input: unknown): boolean =>
  typia.is<
    | PureCallInterface
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryPureCallInterfaceUnionArm = typia.createIs<
  | PureCallInterface
  | {
      kind: "data";
      value: number;
    }
>();
const directPureCallInterfaceGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<PureCallInterface>>(input);
const factoryPureCallInterfaceGeneric =
  typia.createIs<CallableWrapper<PureCallInterface>>();
const directPureCallInterfaceEmptyIntersection = (input: unknown): boolean =>
  typia.is<PureCallInterface & Record<never, never>>(input);
const factoryPureCallInterfaceEmptyIntersection = typia.createIs<
  PureCallInterface & Record<never, never>
>();
const directPureCallLiteralTop = (input: unknown): boolean =>
  typia.is<PureCallLiteral>(input);
const factoryPureCallLiteralTop = typia.createIs<PureCallLiteral>();
const directPureCallLiteralNested = (input: unknown): boolean =>
  typia.is<{
    fn: PureCallLiteral;
  }>(input);
const factoryPureCallLiteralNested = typia.createIs<{
  fn: PureCallLiteral;
}>();
const directPureCallLiteralOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: PureCallLiteral;
  }>(input);
const factoryPureCallLiteralOptionalProperty = typia.createIs<{
  fn?: PureCallLiteral;
}>();
const directPureCallLiteralUnionArm = (input: unknown): boolean =>
  typia.is<
    | PureCallLiteral
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryPureCallLiteralUnionArm = typia.createIs<
  | PureCallLiteral
  | {
      kind: "data";
      value: number;
    }
>();
const directPureCallLiteralGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<PureCallLiteral>>(input);
const factoryPureCallLiteralGeneric =
  typia.createIs<CallableWrapper<PureCallLiteral>>();
const directPureCallLiteralEmptyIntersection = (input: unknown): boolean =>
  typia.is<PureCallLiteral & Record<never, never>>(input);
const factoryPureCallLiteralEmptyIntersection = typia.createIs<
  PureCallLiteral & Record<never, never>
>();
const directPureCallInlineTop = (input: unknown): boolean =>
  typia.is<{
    (value: number): string;
  }>(input);
const factoryPureCallInlineTop = typia.createIs<{
  (value: number): string;
}>();
const directPureCallInlineNested = (input: unknown): boolean =>
  typia.is<{
    fn: {
      (value: number): string;
    };
  }>(input);
const factoryPureCallInlineNested = typia.createIs<{
  fn: {
    (value: number): string;
  };
}>();
const directPureCallInlineOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: {
      (value: number): string;
    };
  }>(input);
const factoryPureCallInlineOptionalProperty = typia.createIs<{
  fn?: {
    (value: number): string;
  };
}>();
const directPureCallInlineUnionArm = (input: unknown): boolean =>
  typia.is<
    | {
        (value: number): string;
      }
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryPureCallInlineUnionArm = typia.createIs<
  | {
      (value: number): string;
    }
  | {
      kind: "data";
      value: number;
    }
>();
const directPureCallInlineGeneric = (input: unknown): boolean =>
  typia.is<
    CallableWrapper<{
      (value: number): string;
    }>
  >(input);
const factoryPureCallInlineGeneric = typia.createIs<
  CallableWrapper<{
    (value: number): string;
  }>
>();
const directPureCallInlineEmptyIntersection = (input: unknown): boolean =>
  typia.is<
    {
      (value: number): string;
    } & Record<never, never>
  >(input);
const factoryPureCallInlineEmptyIntersection = typia.createIs<
  {
    (value: number): string;
  } & Record<never, never>
>();
const directPureCallAliasTop = (input: unknown): boolean =>
  typia.is<PureCallAlias>(input);
const factoryPureCallAliasTop = typia.createIs<PureCallAlias>();
const directPureCallAliasNested = (input: unknown): boolean =>
  typia.is<{
    fn: PureCallAlias;
  }>(input);
const factoryPureCallAliasNested = typia.createIs<{
  fn: PureCallAlias;
}>();
const directPureCallAliasOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: PureCallAlias;
  }>(input);
const factoryPureCallAliasOptionalProperty = typia.createIs<{
  fn?: PureCallAlias;
}>();
const directPureCallAliasUnionArm = (input: unknown): boolean =>
  typia.is<
    | PureCallAlias
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryPureCallAliasUnionArm = typia.createIs<
  | PureCallAlias
  | {
      kind: "data";
      value: number;
    }
>();
const directPureCallAliasGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<PureCallAlias>>(input);
const factoryPureCallAliasGeneric =
  typia.createIs<CallableWrapper<PureCallAlias>>();
const directPureCallAliasEmptyIntersection = (input: unknown): boolean =>
  typia.is<PureCallAlias & Record<never, never>>(input);
const factoryPureCallAliasEmptyIntersection = typia.createIs<
  PureCallAlias & Record<never, never>
>();
const directPureConstructInterfaceTop = (input: unknown): boolean =>
  typia.is<PureConstructInterface>(input);
const factoryPureConstructInterfaceTop =
  typia.createIs<PureConstructInterface>();
const directPureConstructInterfaceNested = (input: unknown): boolean =>
  typia.is<{
    fn: PureConstructInterface;
  }>(input);
const factoryPureConstructInterfaceNested = typia.createIs<{
  fn: PureConstructInterface;
}>();
const directPureConstructInterfaceOptionalProperty = (
  input: unknown,
): boolean =>
  typia.is<{
    fn?: PureConstructInterface;
  }>(input);
const factoryPureConstructInterfaceOptionalProperty = typia.createIs<{
  fn?: PureConstructInterface;
}>();
const directPureConstructInterfaceUnionArm = (input: unknown): boolean =>
  typia.is<
    | PureConstructInterface
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryPureConstructInterfaceUnionArm = typia.createIs<
  | PureConstructInterface
  | {
      kind: "data";
      value: number;
    }
>();
const directPureConstructInterfaceGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<PureConstructInterface>>(input);
const factoryPureConstructInterfaceGeneric =
  typia.createIs<CallableWrapper<PureConstructInterface>>();
const directPureConstructInterfaceEmptyIntersection = (
  input: unknown,
): boolean => typia.is<PureConstructInterface & Record<never, never>>(input);
const factoryPureConstructInterfaceEmptyIntersection = typia.createIs<
  PureConstructInterface & Record<never, never>
>();
const directPureConstructLiteralTop = (input: unknown): boolean =>
  typia.is<PureConstructLiteral>(input);
const factoryPureConstructLiteralTop = typia.createIs<PureConstructLiteral>();
const directPureConstructLiteralNested = (input: unknown): boolean =>
  typia.is<{
    fn: PureConstructLiteral;
  }>(input);
const factoryPureConstructLiteralNested = typia.createIs<{
  fn: PureConstructLiteral;
}>();
const directPureConstructLiteralOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: PureConstructLiteral;
  }>(input);
const factoryPureConstructLiteralOptionalProperty = typia.createIs<{
  fn?: PureConstructLiteral;
}>();
const directPureConstructLiteralUnionArm = (input: unknown): boolean =>
  typia.is<
    | PureConstructLiteral
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryPureConstructLiteralUnionArm = typia.createIs<
  | PureConstructLiteral
  | {
      kind: "data";
      value: number;
    }
>();
const directPureConstructLiteralGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<PureConstructLiteral>>(input);
const factoryPureConstructLiteralGeneric =
  typia.createIs<CallableWrapper<PureConstructLiteral>>();
const directPureConstructLiteralEmptyIntersection = (input: unknown): boolean =>
  typia.is<PureConstructLiteral & Record<never, never>>(input);
const factoryPureConstructLiteralEmptyIntersection = typia.createIs<
  PureConstructLiteral & Record<never, never>
>();
const directPureConstructInlineTop = (input: unknown): boolean =>
  typia.is<{
    new (value: number): {
      value: number;
    };
  }>(input);
const factoryPureConstructInlineTop = typia.createIs<{
  new (value: number): {
    value: number;
  };
}>();
const directPureConstructInlineNested = (input: unknown): boolean =>
  typia.is<{
    fn: {
      new (value: number): {
        value: number;
      };
    };
  }>(input);
const factoryPureConstructInlineNested = typia.createIs<{
  fn: {
    new (value: number): {
      value: number;
    };
  };
}>();
const directPureConstructInlineOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: {
      new (value: number): {
        value: number;
      };
    };
  }>(input);
const factoryPureConstructInlineOptionalProperty = typia.createIs<{
  fn?: {
    new (value: number): {
      value: number;
    };
  };
}>();
const directPureConstructInlineUnionArm = (input: unknown): boolean =>
  typia.is<
    | {
        new (value: number): {
          value: number;
        };
      }
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryPureConstructInlineUnionArm = typia.createIs<
  | {
      new (value: number): {
        value: number;
      };
    }
  | {
      kind: "data";
      value: number;
    }
>();
const directPureConstructInlineGeneric = (input: unknown): boolean =>
  typia.is<
    CallableWrapper<{
      new (value: number): {
        value: number;
      };
    }>
  >(input);
const factoryPureConstructInlineGeneric = typia.createIs<
  CallableWrapper<{
    new (value: number): {
      value: number;
    };
  }>
>();
const directPureConstructInlineEmptyIntersection = (input: unknown): boolean =>
  typia.is<
    {
      new (value: number): {
        value: number;
      };
    } & Record<never, never>
  >(input);
const factoryPureConstructInlineEmptyIntersection = typia.createIs<
  {
    new (value: number): {
      value: number;
    };
  } & Record<never, never>
>();
const directPureConstructAliasTop = (input: unknown): boolean =>
  typia.is<PureConstructAlias>(input);
const factoryPureConstructAliasTop = typia.createIs<PureConstructAlias>();
const directPureConstructAliasNested = (input: unknown): boolean =>
  typia.is<{
    fn: PureConstructAlias;
  }>(input);
const factoryPureConstructAliasNested = typia.createIs<{
  fn: PureConstructAlias;
}>();
const directPureConstructAliasOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: PureConstructAlias;
  }>(input);
const factoryPureConstructAliasOptionalProperty = typia.createIs<{
  fn?: PureConstructAlias;
}>();
const directPureConstructAliasUnionArm = (input: unknown): boolean =>
  typia.is<
    | PureConstructAlias
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryPureConstructAliasUnionArm = typia.createIs<
  | PureConstructAlias
  | {
      kind: "data";
      value: number;
    }
>();
const directPureConstructAliasGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<PureConstructAlias>>(input);
const factoryPureConstructAliasGeneric =
  typia.createIs<CallableWrapper<PureConstructAlias>>();
const directPureConstructAliasEmptyIntersection = (input: unknown): boolean =>
  typia.is<PureConstructAlias & Record<never, never>>(input);
const factoryPureConstructAliasEmptyIntersection = typia.createIs<
  PureConstructAlias & Record<never, never>
>();
const directOverloadInterfaceTop = (input: unknown): boolean =>
  typia.is<OverloadInterface>(input);
const factoryOverloadInterfaceTop = typia.createIs<OverloadInterface>();
const directOverloadInterfaceNested = (input: unknown): boolean =>
  typia.is<{
    fn: OverloadInterface;
  }>(input);
const factoryOverloadInterfaceNested = typia.createIs<{
  fn: OverloadInterface;
}>();
const directOverloadInterfaceOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: OverloadInterface;
  }>(input);
const factoryOverloadInterfaceOptionalProperty = typia.createIs<{
  fn?: OverloadInterface;
}>();
const directOverloadInterfaceUnionArm = (input: unknown): boolean =>
  typia.is<
    | OverloadInterface
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryOverloadInterfaceUnionArm = typia.createIs<
  | OverloadInterface
  | {
      kind: "data";
      value: number;
    }
>();
const directOverloadInterfaceGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<OverloadInterface>>(input);
const factoryOverloadInterfaceGeneric =
  typia.createIs<CallableWrapper<OverloadInterface>>();
const directOverloadInterfaceEmptyIntersection = (input: unknown): boolean =>
  typia.is<OverloadInterface & Record<never, never>>(input);
const factoryOverloadInterfaceEmptyIntersection = typia.createIs<
  OverloadInterface & Record<never, never>
>();
const directOverloadLiteralTop = (input: unknown): boolean =>
  typia.is<OverloadLiteral>(input);
const factoryOverloadLiteralTop = typia.createIs<OverloadLiteral>();
const directOverloadLiteralNested = (input: unknown): boolean =>
  typia.is<{
    fn: OverloadLiteral;
  }>(input);
const factoryOverloadLiteralNested = typia.createIs<{
  fn: OverloadLiteral;
}>();
const directOverloadLiteralOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: OverloadLiteral;
  }>(input);
const factoryOverloadLiteralOptionalProperty = typia.createIs<{
  fn?: OverloadLiteral;
}>();
const directOverloadLiteralUnionArm = (input: unknown): boolean =>
  typia.is<
    | OverloadLiteral
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryOverloadLiteralUnionArm = typia.createIs<
  | OverloadLiteral
  | {
      kind: "data";
      value: number;
    }
>();
const directOverloadLiteralGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<OverloadLiteral>>(input);
const factoryOverloadLiteralGeneric =
  typia.createIs<CallableWrapper<OverloadLiteral>>();
const directOverloadLiteralEmptyIntersection = (input: unknown): boolean =>
  typia.is<OverloadLiteral & Record<never, never>>(input);
const factoryOverloadLiteralEmptyIntersection = typia.createIs<
  OverloadLiteral & Record<never, never>
>();
const directOverloadInlineTop = (input: unknown): boolean =>
  typia.is<{
    (value: number): string;
    (value: string): number;
  }>(input);
const factoryOverloadInlineTop = typia.createIs<{
  (value: number): string;
  (value: string): number;
}>();
const directOverloadInlineNested = (input: unknown): boolean =>
  typia.is<{
    fn: {
      (value: number): string;
      (value: string): number;
    };
  }>(input);
const factoryOverloadInlineNested = typia.createIs<{
  fn: {
    (value: number): string;
    (value: string): number;
  };
}>();
const directOverloadInlineOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: {
      (value: number): string;
      (value: string): number;
    };
  }>(input);
const factoryOverloadInlineOptionalProperty = typia.createIs<{
  fn?: {
    (value: number): string;
    (value: string): number;
  };
}>();
const directOverloadInlineUnionArm = (input: unknown): boolean =>
  typia.is<
    | {
        (value: number): string;
        (value: string): number;
      }
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryOverloadInlineUnionArm = typia.createIs<
  | {
      (value: number): string;
      (value: string): number;
    }
  | {
      kind: "data";
      value: number;
    }
>();
const directOverloadInlineGeneric = (input: unknown): boolean =>
  typia.is<
    CallableWrapper<{
      (value: number): string;
      (value: string): number;
    }>
  >(input);
const factoryOverloadInlineGeneric = typia.createIs<
  CallableWrapper<{
    (value: number): string;
    (value: string): number;
  }>
>();
const directOverloadInlineEmptyIntersection = (input: unknown): boolean =>
  typia.is<
    {
      (value: number): string;
      (value: string): number;
    } & Record<never, never>
  >(input);
const factoryOverloadInlineEmptyIntersection = typia.createIs<
  {
    (value: number): string;
    (value: string): number;
  } & Record<never, never>
>();
const directConstructOverloadInterfaceTop = (input: unknown): boolean =>
  typia.is<ConstructOverloadInterface>(input);
const factoryConstructOverloadInterfaceTop =
  typia.createIs<ConstructOverloadInterface>();
const directConstructOverloadInterfaceNested = (input: unknown): boolean =>
  typia.is<{
    fn: ConstructOverloadInterface;
  }>(input);
const factoryConstructOverloadInterfaceNested = typia.createIs<{
  fn: ConstructOverloadInterface;
}>();
const directConstructOverloadInterfaceOptionalProperty = (
  input: unknown,
): boolean =>
  typia.is<{
    fn?: ConstructOverloadInterface;
  }>(input);
const factoryConstructOverloadInterfaceOptionalProperty = typia.createIs<{
  fn?: ConstructOverloadInterface;
}>();
const directConstructOverloadInterfaceUnionArm = (input: unknown): boolean =>
  typia.is<
    | ConstructOverloadInterface
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryConstructOverloadInterfaceUnionArm = typia.createIs<
  | ConstructOverloadInterface
  | {
      kind: "data";
      value: number;
    }
>();
const directConstructOverloadInterfaceGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<ConstructOverloadInterface>>(input);
const factoryConstructOverloadInterfaceGeneric =
  typia.createIs<CallableWrapper<ConstructOverloadInterface>>();
const directConstructOverloadInterfaceEmptyIntersection = (
  input: unknown,
): boolean =>
  typia.is<ConstructOverloadInterface & Record<never, never>>(input);
const factoryConstructOverloadInterfaceEmptyIntersection = typia.createIs<
  ConstructOverloadInterface & Record<never, never>
>();
const directConstructOverloadLiteralTop = (input: unknown): boolean =>
  typia.is<ConstructOverloadLiteral>(input);
const factoryConstructOverloadLiteralTop =
  typia.createIs<ConstructOverloadLiteral>();
const directConstructOverloadLiteralNested = (input: unknown): boolean =>
  typia.is<{
    fn: ConstructOverloadLiteral;
  }>(input);
const factoryConstructOverloadLiteralNested = typia.createIs<{
  fn: ConstructOverloadLiteral;
}>();
const directConstructOverloadLiteralOptionalProperty = (
  input: unknown,
): boolean =>
  typia.is<{
    fn?: ConstructOverloadLiteral;
  }>(input);
const factoryConstructOverloadLiteralOptionalProperty = typia.createIs<{
  fn?: ConstructOverloadLiteral;
}>();
const directConstructOverloadLiteralUnionArm = (input: unknown): boolean =>
  typia.is<
    | ConstructOverloadLiteral
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryConstructOverloadLiteralUnionArm = typia.createIs<
  | ConstructOverloadLiteral
  | {
      kind: "data";
      value: number;
    }
>();
const directConstructOverloadLiteralGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<ConstructOverloadLiteral>>(input);
const factoryConstructOverloadLiteralGeneric =
  typia.createIs<CallableWrapper<ConstructOverloadLiteral>>();
const directConstructOverloadLiteralEmptyIntersection = (
  input: unknown,
): boolean => typia.is<ConstructOverloadLiteral & Record<never, never>>(input);
const factoryConstructOverloadLiteralEmptyIntersection = typia.createIs<
  ConstructOverloadLiteral & Record<never, never>
>();
const directConstructOverloadInlineTop = (input: unknown): boolean =>
  typia.is<{
    new (value: number): {
      value: number;
    };
    new (value: string): {
      value: string;
    };
  }>(input);
const factoryConstructOverloadInlineTop = typia.createIs<{
  new (value: number): {
    value: number;
  };
  new (value: string): {
    value: string;
  };
}>();
const directConstructOverloadInlineNested = (input: unknown): boolean =>
  typia.is<{
    fn: {
      new (value: number): {
        value: number;
      };
      new (value: string): {
        value: string;
      };
    };
  }>(input);
const factoryConstructOverloadInlineNested = typia.createIs<{
  fn: {
    new (value: number): {
      value: number;
    };
    new (value: string): {
      value: string;
    };
  };
}>();
const directConstructOverloadInlineOptionalProperty = (
  input: unknown,
): boolean =>
  typia.is<{
    fn?: {
      new (value: number): {
        value: number;
      };
      new (value: string): {
        value: string;
      };
    };
  }>(input);
const factoryConstructOverloadInlineOptionalProperty = typia.createIs<{
  fn?: {
    new (value: number): {
      value: number;
    };
    new (value: string): {
      value: string;
    };
  };
}>();
const directConstructOverloadInlineUnionArm = (input: unknown): boolean =>
  typia.is<
    | {
        new (value: number): {
          value: number;
        };
        new (value: string): {
          value: string;
        };
      }
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryConstructOverloadInlineUnionArm = typia.createIs<
  | {
      new (value: number): {
        value: number;
      };
      new (value: string): {
        value: string;
      };
    }
  | {
      kind: "data";
      value: number;
    }
>();
const directConstructOverloadInlineGeneric = (input: unknown): boolean =>
  typia.is<
    CallableWrapper<{
      new (value: number): {
        value: number;
      };
      new (value: string): {
        value: string;
      };
    }>
  >(input);
const factoryConstructOverloadInlineGeneric = typia.createIs<
  CallableWrapper<{
    new (value: number): {
      value: number;
    };
    new (value: string): {
      value: string;
    };
  }>
>();
const directConstructOverloadInlineEmptyIntersection = (
  input: unknown,
): boolean =>
  typia.is<
    {
      new (value: number): {
        value: number;
      };
      new (value: string): {
        value: string;
      };
    } & Record<never, never>
  >(input);
const factoryConstructOverloadInlineEmptyIntersection = typia.createIs<
  {
    new (value: number): {
      value: number;
    };
    new (value: string): {
      value: string;
    };
  } & Record<never, never>
>();
const directCallAndConstructInterfaceTop = (input: unknown): boolean =>
  typia.is<CallAndConstructInterface>(input);
const factoryCallAndConstructInterfaceTop =
  typia.createIs<CallAndConstructInterface>();
const directCallAndConstructInterfaceNested = (input: unknown): boolean =>
  typia.is<{
    fn: CallAndConstructInterface;
  }>(input);
const factoryCallAndConstructInterfaceNested = typia.createIs<{
  fn: CallAndConstructInterface;
}>();
const directCallAndConstructInterfaceOptionalProperty = (
  input: unknown,
): boolean =>
  typia.is<{
    fn?: CallAndConstructInterface;
  }>(input);
const factoryCallAndConstructInterfaceOptionalProperty = typia.createIs<{
  fn?: CallAndConstructInterface;
}>();
const directCallAndConstructInterfaceUnionArm = (input: unknown): boolean =>
  typia.is<
    | CallAndConstructInterface
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryCallAndConstructInterfaceUnionArm = typia.createIs<
  | CallAndConstructInterface
  | {
      kind: "data";
      value: number;
    }
>();
const directCallAndConstructInterfaceGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<CallAndConstructInterface>>(input);
const factoryCallAndConstructInterfaceGeneric =
  typia.createIs<CallableWrapper<CallAndConstructInterface>>();
const directCallAndConstructInterfaceEmptyIntersection = (
  input: unknown,
): boolean => typia.is<CallAndConstructInterface & Record<never, never>>(input);
const factoryCallAndConstructInterfaceEmptyIntersection = typia.createIs<
  CallAndConstructInterface & Record<never, never>
>();
const directCallAndConstructLiteralTop = (input: unknown): boolean =>
  typia.is<CallAndConstructLiteral>(input);
const factoryCallAndConstructLiteralTop =
  typia.createIs<CallAndConstructLiteral>();
const directCallAndConstructLiteralNested = (input: unknown): boolean =>
  typia.is<{
    fn: CallAndConstructLiteral;
  }>(input);
const factoryCallAndConstructLiteralNested = typia.createIs<{
  fn: CallAndConstructLiteral;
}>();
const directCallAndConstructLiteralOptionalProperty = (
  input: unknown,
): boolean =>
  typia.is<{
    fn?: CallAndConstructLiteral;
  }>(input);
const factoryCallAndConstructLiteralOptionalProperty = typia.createIs<{
  fn?: CallAndConstructLiteral;
}>();
const directCallAndConstructLiteralUnionArm = (input: unknown): boolean =>
  typia.is<
    | CallAndConstructLiteral
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryCallAndConstructLiteralUnionArm = typia.createIs<
  | CallAndConstructLiteral
  | {
      kind: "data";
      value: number;
    }
>();
const directCallAndConstructLiteralGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<CallAndConstructLiteral>>(input);
const factoryCallAndConstructLiteralGeneric =
  typia.createIs<CallableWrapper<CallAndConstructLiteral>>();
const directCallAndConstructLiteralEmptyIntersection = (
  input: unknown,
): boolean => typia.is<CallAndConstructLiteral & Record<never, never>>(input);
const factoryCallAndConstructLiteralEmptyIntersection = typia.createIs<
  CallAndConstructLiteral & Record<never, never>
>();
const directCallAndConstructInlineTop = (input: unknown): boolean =>
  typia.is<{
    (value: number): string;
    new (value: number): {
      value: number;
    };
  }>(input);
const factoryCallAndConstructInlineTop = typia.createIs<{
  (value: number): string;
  new (value: number): {
    value: number;
  };
}>();
const directCallAndConstructInlineNested = (input: unknown): boolean =>
  typia.is<{
    fn: {
      (value: number): string;
      new (value: number): {
        value: number;
      };
    };
  }>(input);
const factoryCallAndConstructInlineNested = typia.createIs<{
  fn: {
    (value: number): string;
    new (value: number): {
      value: number;
    };
  };
}>();
const directCallAndConstructInlineOptionalProperty = (
  input: unknown,
): boolean =>
  typia.is<{
    fn?: {
      (value: number): string;
      new (value: number): {
        value: number;
      };
    };
  }>(input);
const factoryCallAndConstructInlineOptionalProperty = typia.createIs<{
  fn?: {
    (value: number): string;
    new (value: number): {
      value: number;
    };
  };
}>();
const directCallAndConstructInlineUnionArm = (input: unknown): boolean =>
  typia.is<
    | {
        (value: number): string;
        new (value: number): {
          value: number;
        };
      }
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryCallAndConstructInlineUnionArm = typia.createIs<
  | {
      (value: number): string;
      new (value: number): {
        value: number;
      };
    }
  | {
      kind: "data";
      value: number;
    }
>();
const directCallAndConstructInlineGeneric = (input: unknown): boolean =>
  typia.is<
    CallableWrapper<{
      (value: number): string;
      new (value: number): {
        value: number;
      };
    }>
  >(input);
const factoryCallAndConstructInlineGeneric = typia.createIs<
  CallableWrapper<{
    (value: number): string;
    new (value: number): {
      value: number;
    };
  }>
>();
const directCallAndConstructInlineEmptyIntersection = (
  input: unknown,
): boolean =>
  typia.is<
    {
      (value: number): string;
      new (value: number): {
        value: number;
      };
    } & Record<never, never>
  >(input);
const factoryCallAndConstructInlineEmptyIntersection = typia.createIs<
  {
    (value: number): string;
    new (value: number): {
      value: number;
    };
  } & Record<never, never>
>();
const directMethodInterfaceTop = (input: unknown): boolean =>
  typia.is<MethodInterface>(input);
const factoryMethodInterfaceTop = typia.createIs<MethodInterface>();
const directMethodInterfaceNested = (input: unknown): boolean =>
  typia.is<{
    fn: MethodInterface;
  }>(input);
const factoryMethodInterfaceNested = typia.createIs<{
  fn: MethodInterface;
}>();
const directMethodInterfaceOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: MethodInterface;
  }>(input);
const factoryMethodInterfaceOptionalProperty = typia.createIs<{
  fn?: MethodInterface;
}>();
const directMethodInterfaceUnionArm = (input: unknown): boolean =>
  typia.is<
    | MethodInterface
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryMethodInterfaceUnionArm = typia.createIs<
  | MethodInterface
  | {
      kind: "data";
      value: number;
    }
>();
const directMethodInterfaceGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<MethodInterface>>(input);
const factoryMethodInterfaceGeneric =
  typia.createIs<CallableWrapper<MethodInterface>>();
const directMethodInterfaceEmptyIntersection = (input: unknown): boolean =>
  typia.is<MethodInterface & Record<never, never>>(input);
const factoryMethodInterfaceEmptyIntersection = typia.createIs<
  MethodInterface & Record<never, never>
>();
const directMethodLiteralTop = (input: unknown): boolean =>
  typia.is<MethodLiteral>(input);
const factoryMethodLiteralTop = typia.createIs<MethodLiteral>();
const directMethodLiteralNested = (input: unknown): boolean =>
  typia.is<{
    fn: MethodLiteral;
  }>(input);
const factoryMethodLiteralNested = typia.createIs<{
  fn: MethodLiteral;
}>();
const directMethodLiteralOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: MethodLiteral;
  }>(input);
const factoryMethodLiteralOptionalProperty = typia.createIs<{
  fn?: MethodLiteral;
}>();
const directMethodLiteralUnionArm = (input: unknown): boolean =>
  typia.is<
    | MethodLiteral
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryMethodLiteralUnionArm = typia.createIs<
  | MethodLiteral
  | {
      kind: "data";
      value: number;
    }
>();
const directMethodLiteralGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<MethodLiteral>>(input);
const factoryMethodLiteralGeneric =
  typia.createIs<CallableWrapper<MethodLiteral>>();
const directMethodLiteralEmptyIntersection = (input: unknown): boolean =>
  typia.is<MethodLiteral & Record<never, never>>(input);
const factoryMethodLiteralEmptyIntersection = typia.createIs<
  MethodLiteral & Record<never, never>
>();
const directMethodInlineTop = (input: unknown): boolean =>
  typia.is<{
    (value: number): string;
    method(): void;
  }>(input);
const factoryMethodInlineTop = typia.createIs<{
  (value: number): string;
  method(): void;
}>();
const directMethodInlineNested = (input: unknown): boolean =>
  typia.is<{
    fn: {
      (value: number): string;
      method(): void;
    };
  }>(input);
const factoryMethodInlineNested = typia.createIs<{
  fn: {
    (value: number): string;
    method(): void;
  };
}>();
const directMethodInlineOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: {
      (value: number): string;
      method(): void;
    };
  }>(input);
const factoryMethodInlineOptionalProperty = typia.createIs<{
  fn?: {
    (value: number): string;
    method(): void;
  };
}>();
const directMethodInlineUnionArm = (input: unknown): boolean =>
  typia.is<
    | {
        (value: number): string;
        method(): void;
      }
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryMethodInlineUnionArm = typia.createIs<
  | {
      (value: number): string;
      method(): void;
    }
  | {
      kind: "data";
      value: number;
    }
>();
const directMethodInlineGeneric = (input: unknown): boolean =>
  typia.is<
    CallableWrapper<{
      (value: number): string;
      method(): void;
    }>
  >(input);
const factoryMethodInlineGeneric = typia.createIs<
  CallableWrapper<{
    (value: number): string;
    method(): void;
  }>
>();
const directMethodInlineEmptyIntersection = (input: unknown): boolean =>
  typia.is<
    {
      (value: number): string;
      method(): void;
    } & Record<never, never>
  >(input);
const factoryMethodInlineEmptyIntersection = typia.createIs<
  {
    (value: number): string;
    method(): void;
  } & Record<never, never>
>();
const directMethodPropertyInterfaceTop = (input: unknown): boolean =>
  typia.is<MethodPropertyInterface>(input);
const factoryMethodPropertyInterfaceTop =
  typia.createIs<MethodPropertyInterface>();
const directMethodPropertyInterfaceNested = (input: unknown): boolean =>
  typia.is<{
    fn: MethodPropertyInterface;
  }>(input);
const factoryMethodPropertyInterfaceNested = typia.createIs<{
  fn: MethodPropertyInterface;
}>();
const directMethodPropertyInterfaceOptionalProperty = (
  input: unknown,
): boolean =>
  typia.is<{
    fn?: MethodPropertyInterface;
  }>(input);
const factoryMethodPropertyInterfaceOptionalProperty = typia.createIs<{
  fn?: MethodPropertyInterface;
}>();
const directMethodPropertyInterfaceUnionArm = (input: unknown): boolean =>
  typia.is<
    | MethodPropertyInterface
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryMethodPropertyInterfaceUnionArm = typia.createIs<
  | MethodPropertyInterface
  | {
      kind: "data";
      value: number;
    }
>();
const directMethodPropertyInterfaceGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<MethodPropertyInterface>>(input);
const factoryMethodPropertyInterfaceGeneric =
  typia.createIs<CallableWrapper<MethodPropertyInterface>>();
const directMethodPropertyInterfaceEmptyIntersection = (
  input: unknown,
): boolean => typia.is<MethodPropertyInterface & Record<never, never>>(input);
const factoryMethodPropertyInterfaceEmptyIntersection = typia.createIs<
  MethodPropertyInterface & Record<never, never>
>();
const directMethodPropertyLiteralTop = (input: unknown): boolean =>
  typia.is<MethodPropertyLiteral>(input);
const factoryMethodPropertyLiteralTop = typia.createIs<MethodPropertyLiteral>();
const directMethodPropertyLiteralNested = (input: unknown): boolean =>
  typia.is<{
    fn: MethodPropertyLiteral;
  }>(input);
const factoryMethodPropertyLiteralNested = typia.createIs<{
  fn: MethodPropertyLiteral;
}>();
const directMethodPropertyLiteralOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: MethodPropertyLiteral;
  }>(input);
const factoryMethodPropertyLiteralOptionalProperty = typia.createIs<{
  fn?: MethodPropertyLiteral;
}>();
const directMethodPropertyLiteralUnionArm = (input: unknown): boolean =>
  typia.is<
    | MethodPropertyLiteral
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryMethodPropertyLiteralUnionArm = typia.createIs<
  | MethodPropertyLiteral
  | {
      kind: "data";
      value: number;
    }
>();
const directMethodPropertyLiteralGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<MethodPropertyLiteral>>(input);
const factoryMethodPropertyLiteralGeneric =
  typia.createIs<CallableWrapper<MethodPropertyLiteral>>();
const directMethodPropertyLiteralEmptyIntersection = (
  input: unknown,
): boolean => typia.is<MethodPropertyLiteral & Record<never, never>>(input);
const factoryMethodPropertyLiteralEmptyIntersection = typia.createIs<
  MethodPropertyLiteral & Record<never, never>
>();
const directMethodPropertyInlineTop = (input: unknown): boolean =>
  typia.is<{
    (value: number): string;
    method: () => void;
  }>(input);
const factoryMethodPropertyInlineTop = typia.createIs<{
  (value: number): string;
  method: () => void;
}>();
const directMethodPropertyInlineNested = (input: unknown): boolean =>
  typia.is<{
    fn: {
      (value: number): string;
      method: () => void;
    };
  }>(input);
const factoryMethodPropertyInlineNested = typia.createIs<{
  fn: {
    (value: number): string;
    method: () => void;
  };
}>();
const directMethodPropertyInlineOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: {
      (value: number): string;
      method: () => void;
    };
  }>(input);
const factoryMethodPropertyInlineOptionalProperty = typia.createIs<{
  fn?: {
    (value: number): string;
    method: () => void;
  };
}>();
const directMethodPropertyInlineUnionArm = (input: unknown): boolean =>
  typia.is<
    | {
        (value: number): string;
        method: () => void;
      }
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryMethodPropertyInlineUnionArm = typia.createIs<
  | {
      (value: number): string;
      method: () => void;
    }
  | {
      kind: "data";
      value: number;
    }
>();
const directMethodPropertyInlineGeneric = (input: unknown): boolean =>
  typia.is<
    CallableWrapper<{
      (value: number): string;
      method: () => void;
    }>
  >(input);
const factoryMethodPropertyInlineGeneric = typia.createIs<
  CallableWrapper<{
    (value: number): string;
    method: () => void;
  }>
>();
const directMethodPropertyInlineEmptyIntersection = (input: unknown): boolean =>
  typia.is<
    {
      (value: number): string;
      method: () => void;
    } & Record<never, never>
  >(input);
const factoryMethodPropertyInlineEmptyIntersection = typia.createIs<
  {
    (value: number): string;
    method: () => void;
  } & Record<never, never>
>();
const directOptionalMethodInterfaceTop = (input: unknown): boolean =>
  typia.is<OptionalMethodInterface>(input);
const factoryOptionalMethodInterfaceTop =
  typia.createIs<OptionalMethodInterface>();
const directOptionalMethodInterfaceNested = (input: unknown): boolean =>
  typia.is<{
    fn: OptionalMethodInterface;
  }>(input);
const factoryOptionalMethodInterfaceNested = typia.createIs<{
  fn: OptionalMethodInterface;
}>();
const directOptionalMethodInterfaceOptionalProperty = (
  input: unknown,
): boolean =>
  typia.is<{
    fn?: OptionalMethodInterface;
  }>(input);
const factoryOptionalMethodInterfaceOptionalProperty = typia.createIs<{
  fn?: OptionalMethodInterface;
}>();
const directOptionalMethodInterfaceUnionArm = (input: unknown): boolean =>
  typia.is<
    | OptionalMethodInterface
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryOptionalMethodInterfaceUnionArm = typia.createIs<
  | OptionalMethodInterface
  | {
      kind: "data";
      value: number;
    }
>();
const directOptionalMethodInterfaceGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<OptionalMethodInterface>>(input);
const factoryOptionalMethodInterfaceGeneric =
  typia.createIs<CallableWrapper<OptionalMethodInterface>>();
const directOptionalMethodInterfaceEmptyIntersection = (
  input: unknown,
): boolean => typia.is<OptionalMethodInterface & Record<never, never>>(input);
const factoryOptionalMethodInterfaceEmptyIntersection = typia.createIs<
  OptionalMethodInterface & Record<never, never>
>();
const directOptionalMethodLiteralTop = (input: unknown): boolean =>
  typia.is<OptionalMethodLiteral>(input);
const factoryOptionalMethodLiteralTop = typia.createIs<OptionalMethodLiteral>();
const directOptionalMethodLiteralNested = (input: unknown): boolean =>
  typia.is<{
    fn: OptionalMethodLiteral;
  }>(input);
const factoryOptionalMethodLiteralNested = typia.createIs<{
  fn: OptionalMethodLiteral;
}>();
const directOptionalMethodLiteralOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: OptionalMethodLiteral;
  }>(input);
const factoryOptionalMethodLiteralOptionalProperty = typia.createIs<{
  fn?: OptionalMethodLiteral;
}>();
const directOptionalMethodLiteralUnionArm = (input: unknown): boolean =>
  typia.is<
    | OptionalMethodLiteral
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryOptionalMethodLiteralUnionArm = typia.createIs<
  | OptionalMethodLiteral
  | {
      kind: "data";
      value: number;
    }
>();
const directOptionalMethodLiteralGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<OptionalMethodLiteral>>(input);
const factoryOptionalMethodLiteralGeneric =
  typia.createIs<CallableWrapper<OptionalMethodLiteral>>();
const directOptionalMethodLiteralEmptyIntersection = (
  input: unknown,
): boolean => typia.is<OptionalMethodLiteral & Record<never, never>>(input);
const factoryOptionalMethodLiteralEmptyIntersection = typia.createIs<
  OptionalMethodLiteral & Record<never, never>
>();
const directOptionalMethodInlineTop = (input: unknown): boolean =>
  typia.is<{
    (value: number): string;
    method?(): void;
  }>(input);
const factoryOptionalMethodInlineTop = typia.createIs<{
  (value: number): string;
  method?(): void;
}>();
const directOptionalMethodInlineNested = (input: unknown): boolean =>
  typia.is<{
    fn: {
      (value: number): string;
      method?(): void;
    };
  }>(input);
const factoryOptionalMethodInlineNested = typia.createIs<{
  fn: {
    (value: number): string;
    method?(): void;
  };
}>();
const directOptionalMethodInlineOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: {
      (value: number): string;
      method?(): void;
    };
  }>(input);
const factoryOptionalMethodInlineOptionalProperty = typia.createIs<{
  fn?: {
    (value: number): string;
    method?(): void;
  };
}>();
const directOptionalMethodInlineUnionArm = (input: unknown): boolean =>
  typia.is<
    | {
        (value: number): string;
        method?(): void;
      }
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryOptionalMethodInlineUnionArm = typia.createIs<
  | {
      (value: number): string;
      method?(): void;
    }
  | {
      kind: "data";
      value: number;
    }
>();
const directOptionalMethodInlineGeneric = (input: unknown): boolean =>
  typia.is<
    CallableWrapper<{
      (value: number): string;
      method?(): void;
    }>
  >(input);
const factoryOptionalMethodInlineGeneric = typia.createIs<
  CallableWrapper<{
    (value: number): string;
    method?(): void;
  }>
>();
const directOptionalMethodInlineEmptyIntersection = (input: unknown): boolean =>
  typia.is<
    {
      (value: number): string;
      method?(): void;
    } & Record<never, never>
  >(input);
const factoryOptionalMethodInlineEmptyIntersection = typia.createIs<
  {
    (value: number): string;
    method?(): void;
  } & Record<never, never>
>();
const directOptionalMethodPropertyInterfaceTop = (input: unknown): boolean =>
  typia.is<OptionalMethodPropertyInterface>(input);
const factoryOptionalMethodPropertyInterfaceTop =
  typia.createIs<OptionalMethodPropertyInterface>();
const directOptionalMethodPropertyInterfaceNested = (input: unknown): boolean =>
  typia.is<{
    fn: OptionalMethodPropertyInterface;
  }>(input);
const factoryOptionalMethodPropertyInterfaceNested = typia.createIs<{
  fn: OptionalMethodPropertyInterface;
}>();
const directOptionalMethodPropertyInterfaceOptionalProperty = (
  input: unknown,
): boolean =>
  typia.is<{
    fn?: OptionalMethodPropertyInterface;
  }>(input);
const factoryOptionalMethodPropertyInterfaceOptionalProperty = typia.createIs<{
  fn?: OptionalMethodPropertyInterface;
}>();
const directOptionalMethodPropertyInterfaceUnionArm = (
  input: unknown,
): boolean =>
  typia.is<
    | OptionalMethodPropertyInterface
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryOptionalMethodPropertyInterfaceUnionArm = typia.createIs<
  | OptionalMethodPropertyInterface
  | {
      kind: "data";
      value: number;
    }
>();
const directOptionalMethodPropertyInterfaceGeneric = (
  input: unknown,
): boolean => typia.is<CallableWrapper<OptionalMethodPropertyInterface>>(input);
const factoryOptionalMethodPropertyInterfaceGeneric =
  typia.createIs<CallableWrapper<OptionalMethodPropertyInterface>>();
const directOptionalMethodPropertyInterfaceEmptyIntersection = (
  input: unknown,
): boolean =>
  typia.is<OptionalMethodPropertyInterface & Record<never, never>>(input);
const factoryOptionalMethodPropertyInterfaceEmptyIntersection = typia.createIs<
  OptionalMethodPropertyInterface & Record<never, never>
>();
const directOptionalMethodPropertyLiteralTop = (input: unknown): boolean =>
  typia.is<OptionalMethodPropertyLiteral>(input);
const factoryOptionalMethodPropertyLiteralTop =
  typia.createIs<OptionalMethodPropertyLiteral>();
const directOptionalMethodPropertyLiteralNested = (input: unknown): boolean =>
  typia.is<{
    fn: OptionalMethodPropertyLiteral;
  }>(input);
const factoryOptionalMethodPropertyLiteralNested = typia.createIs<{
  fn: OptionalMethodPropertyLiteral;
}>();
const directOptionalMethodPropertyLiteralOptionalProperty = (
  input: unknown,
): boolean =>
  typia.is<{
    fn?: OptionalMethodPropertyLiteral;
  }>(input);
const factoryOptionalMethodPropertyLiteralOptionalProperty = typia.createIs<{
  fn?: OptionalMethodPropertyLiteral;
}>();
const directOptionalMethodPropertyLiteralUnionArm = (input: unknown): boolean =>
  typia.is<
    | OptionalMethodPropertyLiteral
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryOptionalMethodPropertyLiteralUnionArm = typia.createIs<
  | OptionalMethodPropertyLiteral
  | {
      kind: "data";
      value: number;
    }
>();
const directOptionalMethodPropertyLiteralGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<OptionalMethodPropertyLiteral>>(input);
const factoryOptionalMethodPropertyLiteralGeneric =
  typia.createIs<CallableWrapper<OptionalMethodPropertyLiteral>>();
const directOptionalMethodPropertyLiteralEmptyIntersection = (
  input: unknown,
): boolean =>
  typia.is<OptionalMethodPropertyLiteral & Record<never, never>>(input);
const factoryOptionalMethodPropertyLiteralEmptyIntersection = typia.createIs<
  OptionalMethodPropertyLiteral & Record<never, never>
>();
const directOptionalMethodPropertyInlineTop = (input: unknown): boolean =>
  typia.is<{
    (value: number): string;
    method?: () => void;
  }>(input);
const factoryOptionalMethodPropertyInlineTop = typia.createIs<{
  (value: number): string;
  method?: () => void;
}>();
const directOptionalMethodPropertyInlineNested = (input: unknown): boolean =>
  typia.is<{
    fn: {
      (value: number): string;
      method?: () => void;
    };
  }>(input);
const factoryOptionalMethodPropertyInlineNested = typia.createIs<{
  fn: {
    (value: number): string;
    method?: () => void;
  };
}>();
const directOptionalMethodPropertyInlineOptionalProperty = (
  input: unknown,
): boolean =>
  typia.is<{
    fn?: {
      (value: number): string;
      method?: () => void;
    };
  }>(input);
const factoryOptionalMethodPropertyInlineOptionalProperty = typia.createIs<{
  fn?: {
    (value: number): string;
    method?: () => void;
  };
}>();
const directOptionalMethodPropertyInlineUnionArm = (input: unknown): boolean =>
  typia.is<
    | {
        (value: number): string;
        method?: () => void;
      }
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryOptionalMethodPropertyInlineUnionArm = typia.createIs<
  | {
      (value: number): string;
      method?: () => void;
    }
  | {
      kind: "data";
      value: number;
    }
>();
const directOptionalMethodPropertyInlineGeneric = (input: unknown): boolean =>
  typia.is<
    CallableWrapper<{
      (value: number): string;
      method?: () => void;
    }>
  >(input);
const factoryOptionalMethodPropertyInlineGeneric = typia.createIs<
  CallableWrapper<{
    (value: number): string;
    method?: () => void;
  }>
>();
const directOptionalMethodPropertyInlineEmptyIntersection = (
  input: unknown,
): boolean =>
  typia.is<
    {
      (value: number): string;
      method?: () => void;
    } & Record<never, never>
  >(input);
const factoryOptionalMethodPropertyInlineEmptyIntersection = typia.createIs<
  {
    (value: number): string;
    method?: () => void;
  } & Record<never, never>
>();
const directSymbolMemberInterfaceTop = (input: unknown): boolean =>
  typia.is<SymbolMemberInterface>(input);
const factorySymbolMemberInterfaceTop = typia.createIs<SymbolMemberInterface>();
const directSymbolMemberInterfaceNested = (input: unknown): boolean =>
  typia.is<{
    fn: SymbolMemberInterface;
  }>(input);
const factorySymbolMemberInterfaceNested = typia.createIs<{
  fn: SymbolMemberInterface;
}>();
const directSymbolMemberInterfaceOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: SymbolMemberInterface;
  }>(input);
const factorySymbolMemberInterfaceOptionalProperty = typia.createIs<{
  fn?: SymbolMemberInterface;
}>();
const directSymbolMemberInterfaceUnionArm = (input: unknown): boolean =>
  typia.is<
    | SymbolMemberInterface
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factorySymbolMemberInterfaceUnionArm = typia.createIs<
  | SymbolMemberInterface
  | {
      kind: "data";
      value: number;
    }
>();
const directSymbolMemberInterfaceGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<SymbolMemberInterface>>(input);
const factorySymbolMemberInterfaceGeneric =
  typia.createIs<CallableWrapper<SymbolMemberInterface>>();
const directSymbolMemberInterfaceEmptyIntersection = (
  input: unknown,
): boolean => typia.is<SymbolMemberInterface & Record<never, never>>(input);
const factorySymbolMemberInterfaceEmptyIntersection = typia.createIs<
  SymbolMemberInterface & Record<never, never>
>();
const directSymbolMemberLiteralTop = (input: unknown): boolean =>
  typia.is<SymbolMemberLiteral>(input);
const factorySymbolMemberLiteralTop = typia.createIs<SymbolMemberLiteral>();
const directSymbolMemberLiteralNested = (input: unknown): boolean =>
  typia.is<{
    fn: SymbolMemberLiteral;
  }>(input);
const factorySymbolMemberLiteralNested = typia.createIs<{
  fn: SymbolMemberLiteral;
}>();
const directSymbolMemberLiteralOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: SymbolMemberLiteral;
  }>(input);
const factorySymbolMemberLiteralOptionalProperty = typia.createIs<{
  fn?: SymbolMemberLiteral;
}>();
const directSymbolMemberLiteralUnionArm = (input: unknown): boolean =>
  typia.is<
    | SymbolMemberLiteral
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factorySymbolMemberLiteralUnionArm = typia.createIs<
  | SymbolMemberLiteral
  | {
      kind: "data";
      value: number;
    }
>();
const directSymbolMemberLiteralGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<SymbolMemberLiteral>>(input);
const factorySymbolMemberLiteralGeneric =
  typia.createIs<CallableWrapper<SymbolMemberLiteral>>();
const directSymbolMemberLiteralEmptyIntersection = (input: unknown): boolean =>
  typia.is<SymbolMemberLiteral & Record<never, never>>(input);
const factorySymbolMemberLiteralEmptyIntersection = typia.createIs<
  SymbolMemberLiteral & Record<never, never>
>();
const directSymbolMemberInlineTop = (input: unknown): boolean =>
  typia.is<{
    (value: number): string;
    [callableBrand]: string;
  }>(input);
const factorySymbolMemberInlineTop = typia.createIs<{
  (value: number): string;
  [callableBrand]: string;
}>();
const directSymbolMemberInlineNested = (input: unknown): boolean =>
  typia.is<{
    fn: {
      (value: number): string;
      [callableBrand]: string;
    };
  }>(input);
const factorySymbolMemberInlineNested = typia.createIs<{
  fn: {
    (value: number): string;
    [callableBrand]: string;
  };
}>();
const directSymbolMemberInlineOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: {
      (value: number): string;
      [callableBrand]: string;
    };
  }>(input);
const factorySymbolMemberInlineOptionalProperty = typia.createIs<{
  fn?: {
    (value: number): string;
    [callableBrand]: string;
  };
}>();
const directSymbolMemberInlineUnionArm = (input: unknown): boolean =>
  typia.is<
    | {
        (value: number): string;
        [callableBrand]: string;
      }
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factorySymbolMemberInlineUnionArm = typia.createIs<
  | {
      (value: number): string;
      [callableBrand]: string;
    }
  | {
      kind: "data";
      value: number;
    }
>();
const directSymbolMemberInlineGeneric = (input: unknown): boolean =>
  typia.is<
    CallableWrapper<{
      (value: number): string;
      [callableBrand]: string;
    }>
  >(input);
const factorySymbolMemberInlineGeneric = typia.createIs<
  CallableWrapper<{
    (value: number): string;
    [callableBrand]: string;
  }>
>();
const directSymbolMemberInlineEmptyIntersection = (input: unknown): boolean =>
  typia.is<
    {
      (value: number): string;
      [callableBrand]: string;
    } & Record<never, never>
  >(input);
const factorySymbolMemberInlineEmptyIntersection = typia.createIs<
  {
    (value: number): string;
    [callableBrand]: string;
  } & Record<never, never>
>();
const directOptionalSymbolMemberInterfaceTop = (input: unknown): boolean =>
  typia.is<OptionalSymbolMemberInterface>(input);
const factoryOptionalSymbolMemberInterfaceTop =
  typia.createIs<OptionalSymbolMemberInterface>();
const directOptionalSymbolMemberInterfaceNested = (input: unknown): boolean =>
  typia.is<{
    fn: OptionalSymbolMemberInterface;
  }>(input);
const factoryOptionalSymbolMemberInterfaceNested = typia.createIs<{
  fn: OptionalSymbolMemberInterface;
}>();
const directOptionalSymbolMemberInterfaceOptionalProperty = (
  input: unknown,
): boolean =>
  typia.is<{
    fn?: OptionalSymbolMemberInterface;
  }>(input);
const factoryOptionalSymbolMemberInterfaceOptionalProperty = typia.createIs<{
  fn?: OptionalSymbolMemberInterface;
}>();
const directOptionalSymbolMemberInterfaceUnionArm = (input: unknown): boolean =>
  typia.is<
    | OptionalSymbolMemberInterface
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryOptionalSymbolMemberInterfaceUnionArm = typia.createIs<
  | OptionalSymbolMemberInterface
  | {
      kind: "data";
      value: number;
    }
>();
const directOptionalSymbolMemberInterfaceGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<OptionalSymbolMemberInterface>>(input);
const factoryOptionalSymbolMemberInterfaceGeneric =
  typia.createIs<CallableWrapper<OptionalSymbolMemberInterface>>();
const directOptionalSymbolMemberInterfaceEmptyIntersection = (
  input: unknown,
): boolean =>
  typia.is<OptionalSymbolMemberInterface & Record<never, never>>(input);
const factoryOptionalSymbolMemberInterfaceEmptyIntersection = typia.createIs<
  OptionalSymbolMemberInterface & Record<never, never>
>();
const directOptionalSymbolMemberLiteralTop = (input: unknown): boolean =>
  typia.is<OptionalSymbolMemberLiteral>(input);
const factoryOptionalSymbolMemberLiteralTop =
  typia.createIs<OptionalSymbolMemberLiteral>();
const directOptionalSymbolMemberLiteralNested = (input: unknown): boolean =>
  typia.is<{
    fn: OptionalSymbolMemberLiteral;
  }>(input);
const factoryOptionalSymbolMemberLiteralNested = typia.createIs<{
  fn: OptionalSymbolMemberLiteral;
}>();
const directOptionalSymbolMemberLiteralOptionalProperty = (
  input: unknown,
): boolean =>
  typia.is<{
    fn?: OptionalSymbolMemberLiteral;
  }>(input);
const factoryOptionalSymbolMemberLiteralOptionalProperty = typia.createIs<{
  fn?: OptionalSymbolMemberLiteral;
}>();
const directOptionalSymbolMemberLiteralUnionArm = (input: unknown): boolean =>
  typia.is<
    | OptionalSymbolMemberLiteral
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryOptionalSymbolMemberLiteralUnionArm = typia.createIs<
  | OptionalSymbolMemberLiteral
  | {
      kind: "data";
      value: number;
    }
>();
const directOptionalSymbolMemberLiteralGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<OptionalSymbolMemberLiteral>>(input);
const factoryOptionalSymbolMemberLiteralGeneric =
  typia.createIs<CallableWrapper<OptionalSymbolMemberLiteral>>();
const directOptionalSymbolMemberLiteralEmptyIntersection = (
  input: unknown,
): boolean =>
  typia.is<OptionalSymbolMemberLiteral & Record<never, never>>(input);
const factoryOptionalSymbolMemberLiteralEmptyIntersection = typia.createIs<
  OptionalSymbolMemberLiteral & Record<never, never>
>();
const directOptionalSymbolMemberInlineTop = (input: unknown): boolean =>
  typia.is<{
    (value: number): string;
    readonly [callableBrand]?: never;
  }>(input);
const factoryOptionalSymbolMemberInlineTop = typia.createIs<{
  (value: number): string;
  readonly [callableBrand]?: never;
}>();
const directOptionalSymbolMemberInlineNested = (input: unknown): boolean =>
  typia.is<{
    fn: {
      (value: number): string;
      readonly [callableBrand]?: never;
    };
  }>(input);
const factoryOptionalSymbolMemberInlineNested = typia.createIs<{
  fn: {
    (value: number): string;
    readonly [callableBrand]?: never;
  };
}>();
const directOptionalSymbolMemberInlineOptionalProperty = (
  input: unknown,
): boolean =>
  typia.is<{
    fn?: {
      (value: number): string;
      readonly [callableBrand]?: never;
    };
  }>(input);
const factoryOptionalSymbolMemberInlineOptionalProperty = typia.createIs<{
  fn?: {
    (value: number): string;
    readonly [callableBrand]?: never;
  };
}>();
const directOptionalSymbolMemberInlineUnionArm = (input: unknown): boolean =>
  typia.is<
    | {
        (value: number): string;
        readonly [callableBrand]?: never;
      }
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryOptionalSymbolMemberInlineUnionArm = typia.createIs<
  | {
      (value: number): string;
      readonly [callableBrand]?: never;
    }
  | {
      kind: "data";
      value: number;
    }
>();
const directOptionalSymbolMemberInlineGeneric = (input: unknown): boolean =>
  typia.is<
    CallableWrapper<{
      (value: number): string;
      readonly [callableBrand]?: never;
    }>
  >(input);
const factoryOptionalSymbolMemberInlineGeneric = typia.createIs<
  CallableWrapper<{
    (value: number): string;
    readonly [callableBrand]?: never;
  }>
>();
const directOptionalSymbolMemberInlineEmptyIntersection = (
  input: unknown,
): boolean =>
  typia.is<
    {
      (value: number): string;
      readonly [callableBrand]?: never;
    } & Record<never, never>
  >(input);
const factoryOptionalSymbolMemberInlineEmptyIntersection = typia.createIs<
  {
    (value: number): string;
    readonly [callableBrand]?: never;
  } & Record<never, never>
>();
const directOptionalMemberInterfaceTop = (input: unknown): boolean =>
  typia.is<OptionalMemberInterface>(input);
const factoryOptionalMemberInterfaceTop =
  typia.createIs<OptionalMemberInterface>();
const directOptionalMemberInterfaceNested = (input: unknown): boolean =>
  typia.is<{
    fn: OptionalMemberInterface;
  }>(input);
const factoryOptionalMemberInterfaceNested = typia.createIs<{
  fn: OptionalMemberInterface;
}>();
const directOptionalMemberInterfaceOptionalProperty = (
  input: unknown,
): boolean =>
  typia.is<{
    fn?: OptionalMemberInterface;
  }>(input);
const factoryOptionalMemberInterfaceOptionalProperty = typia.createIs<{
  fn?: OptionalMemberInterface;
}>();
const directOptionalMemberInterfaceUnionArm = (input: unknown): boolean =>
  typia.is<
    | OptionalMemberInterface
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryOptionalMemberInterfaceUnionArm = typia.createIs<
  | OptionalMemberInterface
  | {
      kind: "data";
      value: number;
    }
>();
const directOptionalMemberInterfaceGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<OptionalMemberInterface>>(input);
const factoryOptionalMemberInterfaceGeneric =
  typia.createIs<CallableWrapper<OptionalMemberInterface>>();
const directOptionalMemberInterfaceEmptyIntersection = (
  input: unknown,
): boolean => typia.is<OptionalMemberInterface & Record<never, never>>(input);
const factoryOptionalMemberInterfaceEmptyIntersection = typia.createIs<
  OptionalMemberInterface & Record<never, never>
>();
const directOptionalMemberLiteralTop = (input: unknown): boolean =>
  typia.is<OptionalMemberLiteral>(input);
const factoryOptionalMemberLiteralTop = typia.createIs<OptionalMemberLiteral>();
const directOptionalMemberLiteralNested = (input: unknown): boolean =>
  typia.is<{
    fn: OptionalMemberLiteral;
  }>(input);
const factoryOptionalMemberLiteralNested = typia.createIs<{
  fn: OptionalMemberLiteral;
}>();
const directOptionalMemberLiteralOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: OptionalMemberLiteral;
  }>(input);
const factoryOptionalMemberLiteralOptionalProperty = typia.createIs<{
  fn?: OptionalMemberLiteral;
}>();
const directOptionalMemberLiteralUnionArm = (input: unknown): boolean =>
  typia.is<
    | OptionalMemberLiteral
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryOptionalMemberLiteralUnionArm = typia.createIs<
  | OptionalMemberLiteral
  | {
      kind: "data";
      value: number;
    }
>();
const directOptionalMemberLiteralGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<OptionalMemberLiteral>>(input);
const factoryOptionalMemberLiteralGeneric =
  typia.createIs<CallableWrapper<OptionalMemberLiteral>>();
const directOptionalMemberLiteralEmptyIntersection = (
  input: unknown,
): boolean => typia.is<OptionalMemberLiteral & Record<never, never>>(input);
const factoryOptionalMemberLiteralEmptyIntersection = typia.createIs<
  OptionalMemberLiteral & Record<never, never>
>();
const directOptionalMemberInlineTop = (input: unknown): boolean =>
  typia.is<{
    (value: number): string;
    label?: string;
  }>(input);
const factoryOptionalMemberInlineTop = typia.createIs<{
  (value: number): string;
  label?: string;
}>();
const directOptionalMemberInlineNested = (input: unknown): boolean =>
  typia.is<{
    fn: {
      (value: number): string;
      label?: string;
    };
  }>(input);
const factoryOptionalMemberInlineNested = typia.createIs<{
  fn: {
    (value: number): string;
    label?: string;
  };
}>();
const directOptionalMemberInlineOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: {
      (value: number): string;
      label?: string;
    };
  }>(input);
const factoryOptionalMemberInlineOptionalProperty = typia.createIs<{
  fn?: {
    (value: number): string;
    label?: string;
  };
}>();
const directOptionalMemberInlineUnionArm = (input: unknown): boolean =>
  typia.is<
    | {
        (value: number): string;
        label?: string;
      }
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryOptionalMemberInlineUnionArm = typia.createIs<
  | {
      (value: number): string;
      label?: string;
    }
  | {
      kind: "data";
      value: number;
    }
>();
const directOptionalMemberInlineGeneric = (input: unknown): boolean =>
  typia.is<
    CallableWrapper<{
      (value: number): string;
      label?: string;
    }>
  >(input);
const factoryOptionalMemberInlineGeneric = typia.createIs<
  CallableWrapper<{
    (value: number): string;
    label?: string;
  }>
>();
const directOptionalMemberInlineEmptyIntersection = (input: unknown): boolean =>
  typia.is<
    {
      (value: number): string;
      label?: string;
    } & Record<never, never>
  >(input);
const factoryOptionalMemberInlineEmptyIntersection = typia.createIs<
  {
    (value: number): string;
    label?: string;
  } & Record<never, never>
>();
const directRequiredMemberInterfaceTop = (input: unknown): boolean =>
  typia.is<RequiredMemberInterface>(input);
const factoryRequiredMemberInterfaceTop =
  typia.createIs<RequiredMemberInterface>();
const directRequiredMemberInterfaceNested = (input: unknown): boolean =>
  typia.is<{
    fn: RequiredMemberInterface;
  }>(input);
const factoryRequiredMemberInterfaceNested = typia.createIs<{
  fn: RequiredMemberInterface;
}>();
const directRequiredMemberInterfaceOptionalProperty = (
  input: unknown,
): boolean =>
  typia.is<{
    fn?: RequiredMemberInterface;
  }>(input);
const factoryRequiredMemberInterfaceOptionalProperty = typia.createIs<{
  fn?: RequiredMemberInterface;
}>();
const directRequiredMemberInterfaceUnionArm = (input: unknown): boolean =>
  typia.is<
    | RequiredMemberInterface
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryRequiredMemberInterfaceUnionArm = typia.createIs<
  | RequiredMemberInterface
  | {
      kind: "data";
      value: number;
    }
>();
const directRequiredMemberInterfaceGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<RequiredMemberInterface>>(input);
const factoryRequiredMemberInterfaceGeneric =
  typia.createIs<CallableWrapper<RequiredMemberInterface>>();
const directRequiredMemberInterfaceEmptyIntersection = (
  input: unknown,
): boolean => typia.is<RequiredMemberInterface & Record<never, never>>(input);
const factoryRequiredMemberInterfaceEmptyIntersection = typia.createIs<
  RequiredMemberInterface & Record<never, never>
>();
const directRequiredMemberLiteralTop = (input: unknown): boolean =>
  typia.is<RequiredMemberLiteral>(input);
const factoryRequiredMemberLiteralTop = typia.createIs<RequiredMemberLiteral>();
const directRequiredMemberLiteralNested = (input: unknown): boolean =>
  typia.is<{
    fn: RequiredMemberLiteral;
  }>(input);
const factoryRequiredMemberLiteralNested = typia.createIs<{
  fn: RequiredMemberLiteral;
}>();
const directRequiredMemberLiteralOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: RequiredMemberLiteral;
  }>(input);
const factoryRequiredMemberLiteralOptionalProperty = typia.createIs<{
  fn?: RequiredMemberLiteral;
}>();
const directRequiredMemberLiteralUnionArm = (input: unknown): boolean =>
  typia.is<
    | RequiredMemberLiteral
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryRequiredMemberLiteralUnionArm = typia.createIs<
  | RequiredMemberLiteral
  | {
      kind: "data";
      value: number;
    }
>();
const directRequiredMemberLiteralGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<RequiredMemberLiteral>>(input);
const factoryRequiredMemberLiteralGeneric =
  typia.createIs<CallableWrapper<RequiredMemberLiteral>>();
const directRequiredMemberLiteralEmptyIntersection = (
  input: unknown,
): boolean => typia.is<RequiredMemberLiteral & Record<never, never>>(input);
const factoryRequiredMemberLiteralEmptyIntersection = typia.createIs<
  RequiredMemberLiteral & Record<never, never>
>();
const directRequiredMemberInlineTop = (input: unknown): boolean =>
  typia.is<{
    (value: number): string;
    label: string;
  }>(input);
const factoryRequiredMemberInlineTop = typia.createIs<{
  (value: number): string;
  label: string;
}>();
const directRequiredMemberInlineNested = (input: unknown): boolean =>
  typia.is<{
    fn: {
      (value: number): string;
      label: string;
    };
  }>(input);
const factoryRequiredMemberInlineNested = typia.createIs<{
  fn: {
    (value: number): string;
    label: string;
  };
}>();
const directRequiredMemberInlineOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: {
      (value: number): string;
      label: string;
    };
  }>(input);
const factoryRequiredMemberInlineOptionalProperty = typia.createIs<{
  fn?: {
    (value: number): string;
    label: string;
  };
}>();
const directRequiredMemberInlineUnionArm = (input: unknown): boolean =>
  typia.is<
    | {
        (value: number): string;
        label: string;
      }
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryRequiredMemberInlineUnionArm = typia.createIs<
  | {
      (value: number): string;
      label: string;
    }
  | {
      kind: "data";
      value: number;
    }
>();
const directRequiredMemberInlineGeneric = (input: unknown): boolean =>
  typia.is<
    CallableWrapper<{
      (value: number): string;
      label: string;
    }>
  >(input);
const factoryRequiredMemberInlineGeneric = typia.createIs<
  CallableWrapper<{
    (value: number): string;
    label: string;
  }>
>();
const directRequiredMemberInlineEmptyIntersection = (input: unknown): boolean =>
  typia.is<
    {
      (value: number): string;
      label: string;
    } & Record<never, never>
  >(input);
const factoryRequiredMemberInlineEmptyIntersection = typia.createIs<
  {
    (value: number): string;
    label: string;
  } & Record<never, never>
>();
const directIndexSignatureInterfaceTop = (input: unknown): boolean =>
  typia.is<IndexSignatureInterface>(input);
const factoryIndexSignatureInterfaceTop =
  typia.createIs<IndexSignatureInterface>();
const directIndexSignatureInterfaceNested = (input: unknown): boolean =>
  typia.is<{
    fn: IndexSignatureInterface;
  }>(input);
const factoryIndexSignatureInterfaceNested = typia.createIs<{
  fn: IndexSignatureInterface;
}>();
const directIndexSignatureInterfaceOptionalProperty = (
  input: unknown,
): boolean =>
  typia.is<{
    fn?: IndexSignatureInterface;
  }>(input);
const factoryIndexSignatureInterfaceOptionalProperty = typia.createIs<{
  fn?: IndexSignatureInterface;
}>();
const directIndexSignatureInterfaceUnionArm = (input: unknown): boolean =>
  typia.is<
    | IndexSignatureInterface
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryIndexSignatureInterfaceUnionArm = typia.createIs<
  | IndexSignatureInterface
  | {
      kind: "data";
      value: number;
    }
>();
const directIndexSignatureInterfaceGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<IndexSignatureInterface>>(input);
const factoryIndexSignatureInterfaceGeneric =
  typia.createIs<CallableWrapper<IndexSignatureInterface>>();
const directIndexSignatureInterfaceEmptyIntersection = (
  input: unknown,
): boolean => typia.is<IndexSignatureInterface & Record<never, never>>(input);
const factoryIndexSignatureInterfaceEmptyIntersection = typia.createIs<
  IndexSignatureInterface & Record<never, never>
>();
const directIndexSignatureLiteralTop = (input: unknown): boolean =>
  typia.is<IndexSignatureLiteral>(input);
const factoryIndexSignatureLiteralTop = typia.createIs<IndexSignatureLiteral>();
const directIndexSignatureLiteralNested = (input: unknown): boolean =>
  typia.is<{
    fn: IndexSignatureLiteral;
  }>(input);
const factoryIndexSignatureLiteralNested = typia.createIs<{
  fn: IndexSignatureLiteral;
}>();
const directIndexSignatureLiteralOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: IndexSignatureLiteral;
  }>(input);
const factoryIndexSignatureLiteralOptionalProperty = typia.createIs<{
  fn?: IndexSignatureLiteral;
}>();
const directIndexSignatureLiteralUnionArm = (input: unknown): boolean =>
  typia.is<
    | IndexSignatureLiteral
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryIndexSignatureLiteralUnionArm = typia.createIs<
  | IndexSignatureLiteral
  | {
      kind: "data";
      value: number;
    }
>();
const directIndexSignatureLiteralGeneric = (input: unknown): boolean =>
  typia.is<CallableWrapper<IndexSignatureLiteral>>(input);
const factoryIndexSignatureLiteralGeneric =
  typia.createIs<CallableWrapper<IndexSignatureLiteral>>();
const directIndexSignatureLiteralEmptyIntersection = (
  input: unknown,
): boolean => typia.is<IndexSignatureLiteral & Record<never, never>>(input);
const factoryIndexSignatureLiteralEmptyIntersection = typia.createIs<
  IndexSignatureLiteral & Record<never, never>
>();
const directIndexSignatureInlineTop = (input: unknown): boolean =>
  typia.is<{
    (value: number): string;
    [key: string]: unknown;
  }>(input);
const factoryIndexSignatureInlineTop = typia.createIs<{
  (value: number): string;
  [key: string]: unknown;
}>();
const directIndexSignatureInlineNested = (input: unknown): boolean =>
  typia.is<{
    fn: {
      (value: number): string;
      [key: string]: unknown;
    };
  }>(input);
const factoryIndexSignatureInlineNested = typia.createIs<{
  fn: {
    (value: number): string;
    [key: string]: unknown;
  };
}>();
const directIndexSignatureInlineOptionalProperty = (input: unknown): boolean =>
  typia.is<{
    fn?: {
      (value: number): string;
      [key: string]: unknown;
    };
  }>(input);
const factoryIndexSignatureInlineOptionalProperty = typia.createIs<{
  fn?: {
    (value: number): string;
    [key: string]: unknown;
  };
}>();
const directIndexSignatureInlineUnionArm = (input: unknown): boolean =>
  typia.is<
    | {
        (value: number): string;
        [key: string]: unknown;
      }
    | {
        kind: "data";
        value: number;
      }
  >(input);
const factoryIndexSignatureInlineUnionArm = typia.createIs<
  | {
      (value: number): string;
      [key: string]: unknown;
    }
  | {
      kind: "data";
      value: number;
    }
>();
const directIndexSignatureInlineGeneric = (input: unknown): boolean =>
  typia.is<
    CallableWrapper<{
      (value: number): string;
      [key: string]: unknown;
    }>
  >(input);
const factoryIndexSignatureInlineGeneric = typia.createIs<
  CallableWrapper<{
    (value: number): string;
    [key: string]: unknown;
  }>
>();
const directIndexSignatureInlineEmptyIntersection = (input: unknown): boolean =>
  typia.is<
    {
      (value: number): string;
      [key: string]: unknown;
    } & Record<never, never>
  >(input);
const factoryIndexSignatureInlineEmptyIntersection = typia.createIs<
  {
    (value: number): string;
    [key: string]: unknown;
  } & Record<never, never>
>();
// Keep every original compile-time equivalence assertion checked in this consumer project.
void (null as unknown as [
  _PureCallLiteralTwin,
  _PureCallInlineTwin,
  _PureCallAliasTwin,
  _PureConstructLiteralTwin,
  _PureConstructInlineTwin,
  _PureConstructAliasTwin,
  _OverloadLiteralTwin,
  _OverloadInlineTwin,
  _OverloadIntersectionTwin,
  _ConstructOverloadLiteralTwin,
  _ConstructOverloadInlineTwin,
  _ConstructOverloadIntersectionTwin,
  _CallAndConstructLiteralTwin,
  _CallAndConstructInlineTwin,
  _CallAndConstructIntersectionTwin,
  _MethodLiteralTwin,
  _MethodInlineTwin,
  _MethodIntersectionTwin,
  _MethodMemberTwin,
  _MethodPropertyLiteralTwin,
  _MethodPropertyInlineTwin,
  _MethodPropertyIntersectionTwin,
  _MethodPropertyMemberTwin,
  _OptionalMethodLiteralTwin,
  _OptionalMethodInlineTwin,
  _OptionalMethodIntersectionTwin,
  _OptionalMethodMemberTwin,
  _OptionalMethodPropertyLiteralTwin,
  _OptionalMethodPropertyInlineTwin,
  _OptionalMethodPropertyIntersectionTwin,
  _OptionalMethodPropertyMemberTwin,
  _SymbolMemberLiteralTwin,
  _SymbolMemberInlineTwin,
  _SymbolMemberIntersectionTwin,
  _OptionalSymbolMemberLiteralTwin,
  _OptionalSymbolMemberInlineTwin,
  _OptionalSymbolMemberIntersectionTwin,
  _OptionalMemberLiteralTwin,
  _OptionalMemberInlineTwin,
  _OptionalMemberIntersectionTwin,
  _RequiredMemberLiteralTwin,
  _RequiredMemberInlineTwin,
  _RequiredMemberIntersectionTwin,
  _IndexSignatureLiteralTwin,
  _IndexSignatureInlineTwin,
  _IndexSignatureIntersectionTwin,
]);
/**
 * Verifies equivalent callable spellings preserve their runtime contract.
 *
 * Runs the real native callbacks so correct emitted text cannot hide a runtime
 * routing, receiver, copy or comparison defect.
 *
 * 1. Produce the same typed public callbacks as the original regression.
 * 2. Execute its authored inputs and independent result assertions.
 * 3. Propagate every failed comparison to the shared suite runner.
 *
 * @evidence contracts/testing.md#behavioral-verification Fourteen call/construct/hybrid shapes, six positions, direct/factory forms and twelve values retain parity, method/property twins, absolute anchors and four optional-member states. Compiled Same assertions establish type equivalence; parity alone cannot detect a shared bug.
 * @evidence contracts/testing.md#independent-expectations Compiled Same/Assert aliases establish mutual TypeScript assignability of the compared spellings. Runtime spelling/member/optional rows are correlated parity checks, not independent verdicts; separate literal anchors pin the documented default/functional pure-callable option rule and the member-bearing structural boundary retained by merged #2250 and issue #2238.
 * @evidence contracts/testing.md#distinguishing-cases Fourteen call/construct/hybrid shapes, six positions, direct/factory forms and twelve values retain parity, method/property twins, absolute anchors and four optional-member states. Compiled Same assertions establish type equivalence; parity alone cannot detect a shared bug. Each invocation checks one actual transform option. The ordinary suite invokes functional mode; the separate default-option batch must invoke default mode against a project transformed with functional disabled. Both option executions are required to establish preserved coverage.
 * @evidence contracts/testing.md#execution-ownership The matching exported composite is discovered by TestServant in test-typia-automated. Private typed producers and deliberately unchecked JavaScript-style runtime inputs preserve the original test boundary.
 * @evidence contracts/e2e.md#necessary-boundary Real typia public calls are transformed and their callbacks execute in Node. Go unit assertions on metadata or emitted text cannot detect a runtime result, receiver or mutation defect.
 * @evidence contracts/e2e.md#shared-execution This case reuses the suite's generated project and shared worker with other native composites; it starts no compiler project, subprocess or artifact installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation constructs its own sample inputs and observations. Cases that mutate arrays, objects or recursive graphs retain those values within that invocation, and do not cache verdicts. The suite owns and closes the worker.
 * @evidence contracts/e2e.md#preserved-coverage The original typed fixture, public call forms and runtime input/assertion population are retained here. Each invocation checks one actual transform option. The ordinary suite invokes functional mode; the separate default-option batch must invoke default mode against a project transformed with functional disabled. Both option executions are required to establish preserved coverage. Execution is verified by the canonical suite run, not this comment.
 */
export const test_native_callable_type_literal_spelling = (
  mode: "default" | "functional" = "functional",
): void => {
  const mod: Record<string, any> = {
    directPureCallInterfaceTop,
    factoryPureCallInterfaceTop,
    directPureCallInterfaceNested,
    factoryPureCallInterfaceNested,
    directPureCallInterfaceOptionalProperty,
    factoryPureCallInterfaceOptionalProperty,
    directPureCallInterfaceUnionArm,
    factoryPureCallInterfaceUnionArm,
    directPureCallInterfaceGeneric,
    factoryPureCallInterfaceGeneric,
    directPureCallInterfaceEmptyIntersection,
    factoryPureCallInterfaceEmptyIntersection,
    directPureCallLiteralTop,
    factoryPureCallLiteralTop,
    directPureCallLiteralNested,
    factoryPureCallLiteralNested,
    directPureCallLiteralOptionalProperty,
    factoryPureCallLiteralOptionalProperty,
    directPureCallLiteralUnionArm,
    factoryPureCallLiteralUnionArm,
    directPureCallLiteralGeneric,
    factoryPureCallLiteralGeneric,
    directPureCallLiteralEmptyIntersection,
    factoryPureCallLiteralEmptyIntersection,
    directPureCallInlineTop,
    factoryPureCallInlineTop,
    directPureCallInlineNested,
    factoryPureCallInlineNested,
    directPureCallInlineOptionalProperty,
    factoryPureCallInlineOptionalProperty,
    directPureCallInlineUnionArm,
    factoryPureCallInlineUnionArm,
    directPureCallInlineGeneric,
    factoryPureCallInlineGeneric,
    directPureCallInlineEmptyIntersection,
    factoryPureCallInlineEmptyIntersection,
    directPureCallAliasTop,
    factoryPureCallAliasTop,
    directPureCallAliasNested,
    factoryPureCallAliasNested,
    directPureCallAliasOptionalProperty,
    factoryPureCallAliasOptionalProperty,
    directPureCallAliasUnionArm,
    factoryPureCallAliasUnionArm,
    directPureCallAliasGeneric,
    factoryPureCallAliasGeneric,
    directPureCallAliasEmptyIntersection,
    factoryPureCallAliasEmptyIntersection,
    directPureConstructInterfaceTop,
    factoryPureConstructInterfaceTop,
    directPureConstructInterfaceNested,
    factoryPureConstructInterfaceNested,
    directPureConstructInterfaceOptionalProperty,
    factoryPureConstructInterfaceOptionalProperty,
    directPureConstructInterfaceUnionArm,
    factoryPureConstructInterfaceUnionArm,
    directPureConstructInterfaceGeneric,
    factoryPureConstructInterfaceGeneric,
    directPureConstructInterfaceEmptyIntersection,
    factoryPureConstructInterfaceEmptyIntersection,
    directPureConstructLiteralTop,
    factoryPureConstructLiteralTop,
    directPureConstructLiteralNested,
    factoryPureConstructLiteralNested,
    directPureConstructLiteralOptionalProperty,
    factoryPureConstructLiteralOptionalProperty,
    directPureConstructLiteralUnionArm,
    factoryPureConstructLiteralUnionArm,
    directPureConstructLiteralGeneric,
    factoryPureConstructLiteralGeneric,
    directPureConstructLiteralEmptyIntersection,
    factoryPureConstructLiteralEmptyIntersection,
    directPureConstructInlineTop,
    factoryPureConstructInlineTop,
    directPureConstructInlineNested,
    factoryPureConstructInlineNested,
    directPureConstructInlineOptionalProperty,
    factoryPureConstructInlineOptionalProperty,
    directPureConstructInlineUnionArm,
    factoryPureConstructInlineUnionArm,
    directPureConstructInlineGeneric,
    factoryPureConstructInlineGeneric,
    directPureConstructInlineEmptyIntersection,
    factoryPureConstructInlineEmptyIntersection,
    directPureConstructAliasTop,
    factoryPureConstructAliasTop,
    directPureConstructAliasNested,
    factoryPureConstructAliasNested,
    directPureConstructAliasOptionalProperty,
    factoryPureConstructAliasOptionalProperty,
    directPureConstructAliasUnionArm,
    factoryPureConstructAliasUnionArm,
    directPureConstructAliasGeneric,
    factoryPureConstructAliasGeneric,
    directPureConstructAliasEmptyIntersection,
    factoryPureConstructAliasEmptyIntersection,
    directOverloadInterfaceTop,
    factoryOverloadInterfaceTop,
    directOverloadInterfaceNested,
    factoryOverloadInterfaceNested,
    directOverloadInterfaceOptionalProperty,
    factoryOverloadInterfaceOptionalProperty,
    directOverloadInterfaceUnionArm,
    factoryOverloadInterfaceUnionArm,
    directOverloadInterfaceGeneric,
    factoryOverloadInterfaceGeneric,
    directOverloadInterfaceEmptyIntersection,
    factoryOverloadInterfaceEmptyIntersection,
    directOverloadLiteralTop,
    factoryOverloadLiteralTop,
    directOverloadLiteralNested,
    factoryOverloadLiteralNested,
    directOverloadLiteralOptionalProperty,
    factoryOverloadLiteralOptionalProperty,
    directOverloadLiteralUnionArm,
    factoryOverloadLiteralUnionArm,
    directOverloadLiteralGeneric,
    factoryOverloadLiteralGeneric,
    directOverloadLiteralEmptyIntersection,
    factoryOverloadLiteralEmptyIntersection,
    directOverloadInlineTop,
    factoryOverloadInlineTop,
    directOverloadInlineNested,
    factoryOverloadInlineNested,
    directOverloadInlineOptionalProperty,
    factoryOverloadInlineOptionalProperty,
    directOverloadInlineUnionArm,
    factoryOverloadInlineUnionArm,
    directOverloadInlineGeneric,
    factoryOverloadInlineGeneric,
    directOverloadInlineEmptyIntersection,
    factoryOverloadInlineEmptyIntersection,
    directConstructOverloadInterfaceTop,
    factoryConstructOverloadInterfaceTop,
    directConstructOverloadInterfaceNested,
    factoryConstructOverloadInterfaceNested,
    directConstructOverloadInterfaceOptionalProperty,
    factoryConstructOverloadInterfaceOptionalProperty,
    directConstructOverloadInterfaceUnionArm,
    factoryConstructOverloadInterfaceUnionArm,
    directConstructOverloadInterfaceGeneric,
    factoryConstructOverloadInterfaceGeneric,
    directConstructOverloadInterfaceEmptyIntersection,
    factoryConstructOverloadInterfaceEmptyIntersection,
    directConstructOverloadLiteralTop,
    factoryConstructOverloadLiteralTop,
    directConstructOverloadLiteralNested,
    factoryConstructOverloadLiteralNested,
    directConstructOverloadLiteralOptionalProperty,
    factoryConstructOverloadLiteralOptionalProperty,
    directConstructOverloadLiteralUnionArm,
    factoryConstructOverloadLiteralUnionArm,
    directConstructOverloadLiteralGeneric,
    factoryConstructOverloadLiteralGeneric,
    directConstructOverloadLiteralEmptyIntersection,
    factoryConstructOverloadLiteralEmptyIntersection,
    directConstructOverloadInlineTop,
    factoryConstructOverloadInlineTop,
    directConstructOverloadInlineNested,
    factoryConstructOverloadInlineNested,
    directConstructOverloadInlineOptionalProperty,
    factoryConstructOverloadInlineOptionalProperty,
    directConstructOverloadInlineUnionArm,
    factoryConstructOverloadInlineUnionArm,
    directConstructOverloadInlineGeneric,
    factoryConstructOverloadInlineGeneric,
    directConstructOverloadInlineEmptyIntersection,
    factoryConstructOverloadInlineEmptyIntersection,
    directCallAndConstructInterfaceTop,
    factoryCallAndConstructInterfaceTop,
    directCallAndConstructInterfaceNested,
    factoryCallAndConstructInterfaceNested,
    directCallAndConstructInterfaceOptionalProperty,
    factoryCallAndConstructInterfaceOptionalProperty,
    directCallAndConstructInterfaceUnionArm,
    factoryCallAndConstructInterfaceUnionArm,
    directCallAndConstructInterfaceGeneric,
    factoryCallAndConstructInterfaceGeneric,
    directCallAndConstructInterfaceEmptyIntersection,
    factoryCallAndConstructInterfaceEmptyIntersection,
    directCallAndConstructLiteralTop,
    factoryCallAndConstructLiteralTop,
    directCallAndConstructLiteralNested,
    factoryCallAndConstructLiteralNested,
    directCallAndConstructLiteralOptionalProperty,
    factoryCallAndConstructLiteralOptionalProperty,
    directCallAndConstructLiteralUnionArm,
    factoryCallAndConstructLiteralUnionArm,
    directCallAndConstructLiteralGeneric,
    factoryCallAndConstructLiteralGeneric,
    directCallAndConstructLiteralEmptyIntersection,
    factoryCallAndConstructLiteralEmptyIntersection,
    directCallAndConstructInlineTop,
    factoryCallAndConstructInlineTop,
    directCallAndConstructInlineNested,
    factoryCallAndConstructInlineNested,
    directCallAndConstructInlineOptionalProperty,
    factoryCallAndConstructInlineOptionalProperty,
    directCallAndConstructInlineUnionArm,
    factoryCallAndConstructInlineUnionArm,
    directCallAndConstructInlineGeneric,
    factoryCallAndConstructInlineGeneric,
    directCallAndConstructInlineEmptyIntersection,
    factoryCallAndConstructInlineEmptyIntersection,
    directMethodInterfaceTop,
    factoryMethodInterfaceTop,
    directMethodInterfaceNested,
    factoryMethodInterfaceNested,
    directMethodInterfaceOptionalProperty,
    factoryMethodInterfaceOptionalProperty,
    directMethodInterfaceUnionArm,
    factoryMethodInterfaceUnionArm,
    directMethodInterfaceGeneric,
    factoryMethodInterfaceGeneric,
    directMethodInterfaceEmptyIntersection,
    factoryMethodInterfaceEmptyIntersection,
    directMethodLiteralTop,
    factoryMethodLiteralTop,
    directMethodLiteralNested,
    factoryMethodLiteralNested,
    directMethodLiteralOptionalProperty,
    factoryMethodLiteralOptionalProperty,
    directMethodLiteralUnionArm,
    factoryMethodLiteralUnionArm,
    directMethodLiteralGeneric,
    factoryMethodLiteralGeneric,
    directMethodLiteralEmptyIntersection,
    factoryMethodLiteralEmptyIntersection,
    directMethodInlineTop,
    factoryMethodInlineTop,
    directMethodInlineNested,
    factoryMethodInlineNested,
    directMethodInlineOptionalProperty,
    factoryMethodInlineOptionalProperty,
    directMethodInlineUnionArm,
    factoryMethodInlineUnionArm,
    directMethodInlineGeneric,
    factoryMethodInlineGeneric,
    directMethodInlineEmptyIntersection,
    factoryMethodInlineEmptyIntersection,
    directMethodPropertyInterfaceTop,
    factoryMethodPropertyInterfaceTop,
    directMethodPropertyInterfaceNested,
    factoryMethodPropertyInterfaceNested,
    directMethodPropertyInterfaceOptionalProperty,
    factoryMethodPropertyInterfaceOptionalProperty,
    directMethodPropertyInterfaceUnionArm,
    factoryMethodPropertyInterfaceUnionArm,
    directMethodPropertyInterfaceGeneric,
    factoryMethodPropertyInterfaceGeneric,
    directMethodPropertyInterfaceEmptyIntersection,
    factoryMethodPropertyInterfaceEmptyIntersection,
    directMethodPropertyLiteralTop,
    factoryMethodPropertyLiteralTop,
    directMethodPropertyLiteralNested,
    factoryMethodPropertyLiteralNested,
    directMethodPropertyLiteralOptionalProperty,
    factoryMethodPropertyLiteralOptionalProperty,
    directMethodPropertyLiteralUnionArm,
    factoryMethodPropertyLiteralUnionArm,
    directMethodPropertyLiteralGeneric,
    factoryMethodPropertyLiteralGeneric,
    directMethodPropertyLiteralEmptyIntersection,
    factoryMethodPropertyLiteralEmptyIntersection,
    directMethodPropertyInlineTop,
    factoryMethodPropertyInlineTop,
    directMethodPropertyInlineNested,
    factoryMethodPropertyInlineNested,
    directMethodPropertyInlineOptionalProperty,
    factoryMethodPropertyInlineOptionalProperty,
    directMethodPropertyInlineUnionArm,
    factoryMethodPropertyInlineUnionArm,
    directMethodPropertyInlineGeneric,
    factoryMethodPropertyInlineGeneric,
    directMethodPropertyInlineEmptyIntersection,
    factoryMethodPropertyInlineEmptyIntersection,
    directOptionalMethodInterfaceTop,
    factoryOptionalMethodInterfaceTop,
    directOptionalMethodInterfaceNested,
    factoryOptionalMethodInterfaceNested,
    directOptionalMethodInterfaceOptionalProperty,
    factoryOptionalMethodInterfaceOptionalProperty,
    directOptionalMethodInterfaceUnionArm,
    factoryOptionalMethodInterfaceUnionArm,
    directOptionalMethodInterfaceGeneric,
    factoryOptionalMethodInterfaceGeneric,
    directOptionalMethodInterfaceEmptyIntersection,
    factoryOptionalMethodInterfaceEmptyIntersection,
    directOptionalMethodLiteralTop,
    factoryOptionalMethodLiteralTop,
    directOptionalMethodLiteralNested,
    factoryOptionalMethodLiteralNested,
    directOptionalMethodLiteralOptionalProperty,
    factoryOptionalMethodLiteralOptionalProperty,
    directOptionalMethodLiteralUnionArm,
    factoryOptionalMethodLiteralUnionArm,
    directOptionalMethodLiteralGeneric,
    factoryOptionalMethodLiteralGeneric,
    directOptionalMethodLiteralEmptyIntersection,
    factoryOptionalMethodLiteralEmptyIntersection,
    directOptionalMethodInlineTop,
    factoryOptionalMethodInlineTop,
    directOptionalMethodInlineNested,
    factoryOptionalMethodInlineNested,
    directOptionalMethodInlineOptionalProperty,
    factoryOptionalMethodInlineOptionalProperty,
    directOptionalMethodInlineUnionArm,
    factoryOptionalMethodInlineUnionArm,
    directOptionalMethodInlineGeneric,
    factoryOptionalMethodInlineGeneric,
    directOptionalMethodInlineEmptyIntersection,
    factoryOptionalMethodInlineEmptyIntersection,
    directOptionalMethodPropertyInterfaceTop,
    factoryOptionalMethodPropertyInterfaceTop,
    directOptionalMethodPropertyInterfaceNested,
    factoryOptionalMethodPropertyInterfaceNested,
    directOptionalMethodPropertyInterfaceOptionalProperty,
    factoryOptionalMethodPropertyInterfaceOptionalProperty,
    directOptionalMethodPropertyInterfaceUnionArm,
    factoryOptionalMethodPropertyInterfaceUnionArm,
    directOptionalMethodPropertyInterfaceGeneric,
    factoryOptionalMethodPropertyInterfaceGeneric,
    directOptionalMethodPropertyInterfaceEmptyIntersection,
    factoryOptionalMethodPropertyInterfaceEmptyIntersection,
    directOptionalMethodPropertyLiteralTop,
    factoryOptionalMethodPropertyLiteralTop,
    directOptionalMethodPropertyLiteralNested,
    factoryOptionalMethodPropertyLiteralNested,
    directOptionalMethodPropertyLiteralOptionalProperty,
    factoryOptionalMethodPropertyLiteralOptionalProperty,
    directOptionalMethodPropertyLiteralUnionArm,
    factoryOptionalMethodPropertyLiteralUnionArm,
    directOptionalMethodPropertyLiteralGeneric,
    factoryOptionalMethodPropertyLiteralGeneric,
    directOptionalMethodPropertyLiteralEmptyIntersection,
    factoryOptionalMethodPropertyLiteralEmptyIntersection,
    directOptionalMethodPropertyInlineTop,
    factoryOptionalMethodPropertyInlineTop,
    directOptionalMethodPropertyInlineNested,
    factoryOptionalMethodPropertyInlineNested,
    directOptionalMethodPropertyInlineOptionalProperty,
    factoryOptionalMethodPropertyInlineOptionalProperty,
    directOptionalMethodPropertyInlineUnionArm,
    factoryOptionalMethodPropertyInlineUnionArm,
    directOptionalMethodPropertyInlineGeneric,
    factoryOptionalMethodPropertyInlineGeneric,
    directOptionalMethodPropertyInlineEmptyIntersection,
    factoryOptionalMethodPropertyInlineEmptyIntersection,
    directSymbolMemberInterfaceTop,
    factorySymbolMemberInterfaceTop,
    directSymbolMemberInterfaceNested,
    factorySymbolMemberInterfaceNested,
    directSymbolMemberInterfaceOptionalProperty,
    factorySymbolMemberInterfaceOptionalProperty,
    directSymbolMemberInterfaceUnionArm,
    factorySymbolMemberInterfaceUnionArm,
    directSymbolMemberInterfaceGeneric,
    factorySymbolMemberInterfaceGeneric,
    directSymbolMemberInterfaceEmptyIntersection,
    factorySymbolMemberInterfaceEmptyIntersection,
    directSymbolMemberLiteralTop,
    factorySymbolMemberLiteralTop,
    directSymbolMemberLiteralNested,
    factorySymbolMemberLiteralNested,
    directSymbolMemberLiteralOptionalProperty,
    factorySymbolMemberLiteralOptionalProperty,
    directSymbolMemberLiteralUnionArm,
    factorySymbolMemberLiteralUnionArm,
    directSymbolMemberLiteralGeneric,
    factorySymbolMemberLiteralGeneric,
    directSymbolMemberLiteralEmptyIntersection,
    factorySymbolMemberLiteralEmptyIntersection,
    directSymbolMemberInlineTop,
    factorySymbolMemberInlineTop,
    directSymbolMemberInlineNested,
    factorySymbolMemberInlineNested,
    directSymbolMemberInlineOptionalProperty,
    factorySymbolMemberInlineOptionalProperty,
    directSymbolMemberInlineUnionArm,
    factorySymbolMemberInlineUnionArm,
    directSymbolMemberInlineGeneric,
    factorySymbolMemberInlineGeneric,
    directSymbolMemberInlineEmptyIntersection,
    factorySymbolMemberInlineEmptyIntersection,
    directOptionalSymbolMemberInterfaceTop,
    factoryOptionalSymbolMemberInterfaceTop,
    directOptionalSymbolMemberInterfaceNested,
    factoryOptionalSymbolMemberInterfaceNested,
    directOptionalSymbolMemberInterfaceOptionalProperty,
    factoryOptionalSymbolMemberInterfaceOptionalProperty,
    directOptionalSymbolMemberInterfaceUnionArm,
    factoryOptionalSymbolMemberInterfaceUnionArm,
    directOptionalSymbolMemberInterfaceGeneric,
    factoryOptionalSymbolMemberInterfaceGeneric,
    directOptionalSymbolMemberInterfaceEmptyIntersection,
    factoryOptionalSymbolMemberInterfaceEmptyIntersection,
    directOptionalSymbolMemberLiteralTop,
    factoryOptionalSymbolMemberLiteralTop,
    directOptionalSymbolMemberLiteralNested,
    factoryOptionalSymbolMemberLiteralNested,
    directOptionalSymbolMemberLiteralOptionalProperty,
    factoryOptionalSymbolMemberLiteralOptionalProperty,
    directOptionalSymbolMemberLiteralUnionArm,
    factoryOptionalSymbolMemberLiteralUnionArm,
    directOptionalSymbolMemberLiteralGeneric,
    factoryOptionalSymbolMemberLiteralGeneric,
    directOptionalSymbolMemberLiteralEmptyIntersection,
    factoryOptionalSymbolMemberLiteralEmptyIntersection,
    directOptionalSymbolMemberInlineTop,
    factoryOptionalSymbolMemberInlineTop,
    directOptionalSymbolMemberInlineNested,
    factoryOptionalSymbolMemberInlineNested,
    directOptionalSymbolMemberInlineOptionalProperty,
    factoryOptionalSymbolMemberInlineOptionalProperty,
    directOptionalSymbolMemberInlineUnionArm,
    factoryOptionalSymbolMemberInlineUnionArm,
    directOptionalSymbolMemberInlineGeneric,
    factoryOptionalSymbolMemberInlineGeneric,
    directOptionalSymbolMemberInlineEmptyIntersection,
    factoryOptionalSymbolMemberInlineEmptyIntersection,
    directOptionalMemberInterfaceTop,
    factoryOptionalMemberInterfaceTop,
    directOptionalMemberInterfaceNested,
    factoryOptionalMemberInterfaceNested,
    directOptionalMemberInterfaceOptionalProperty,
    factoryOptionalMemberInterfaceOptionalProperty,
    directOptionalMemberInterfaceUnionArm,
    factoryOptionalMemberInterfaceUnionArm,
    directOptionalMemberInterfaceGeneric,
    factoryOptionalMemberInterfaceGeneric,
    directOptionalMemberInterfaceEmptyIntersection,
    factoryOptionalMemberInterfaceEmptyIntersection,
    directOptionalMemberLiteralTop,
    factoryOptionalMemberLiteralTop,
    directOptionalMemberLiteralNested,
    factoryOptionalMemberLiteralNested,
    directOptionalMemberLiteralOptionalProperty,
    factoryOptionalMemberLiteralOptionalProperty,
    directOptionalMemberLiteralUnionArm,
    factoryOptionalMemberLiteralUnionArm,
    directOptionalMemberLiteralGeneric,
    factoryOptionalMemberLiteralGeneric,
    directOptionalMemberLiteralEmptyIntersection,
    factoryOptionalMemberLiteralEmptyIntersection,
    directOptionalMemberInlineTop,
    factoryOptionalMemberInlineTop,
    directOptionalMemberInlineNested,
    factoryOptionalMemberInlineNested,
    directOptionalMemberInlineOptionalProperty,
    factoryOptionalMemberInlineOptionalProperty,
    directOptionalMemberInlineUnionArm,
    factoryOptionalMemberInlineUnionArm,
    directOptionalMemberInlineGeneric,
    factoryOptionalMemberInlineGeneric,
    directOptionalMemberInlineEmptyIntersection,
    factoryOptionalMemberInlineEmptyIntersection,
    directRequiredMemberInterfaceTop,
    factoryRequiredMemberInterfaceTop,
    directRequiredMemberInterfaceNested,
    factoryRequiredMemberInterfaceNested,
    directRequiredMemberInterfaceOptionalProperty,
    factoryRequiredMemberInterfaceOptionalProperty,
    directRequiredMemberInterfaceUnionArm,
    factoryRequiredMemberInterfaceUnionArm,
    directRequiredMemberInterfaceGeneric,
    factoryRequiredMemberInterfaceGeneric,
    directRequiredMemberInterfaceEmptyIntersection,
    factoryRequiredMemberInterfaceEmptyIntersection,
    directRequiredMemberLiteralTop,
    factoryRequiredMemberLiteralTop,
    directRequiredMemberLiteralNested,
    factoryRequiredMemberLiteralNested,
    directRequiredMemberLiteralOptionalProperty,
    factoryRequiredMemberLiteralOptionalProperty,
    directRequiredMemberLiteralUnionArm,
    factoryRequiredMemberLiteralUnionArm,
    directRequiredMemberLiteralGeneric,
    factoryRequiredMemberLiteralGeneric,
    directRequiredMemberLiteralEmptyIntersection,
    factoryRequiredMemberLiteralEmptyIntersection,
    directRequiredMemberInlineTop,
    factoryRequiredMemberInlineTop,
    directRequiredMemberInlineNested,
    factoryRequiredMemberInlineNested,
    directRequiredMemberInlineOptionalProperty,
    factoryRequiredMemberInlineOptionalProperty,
    directRequiredMemberInlineUnionArm,
    factoryRequiredMemberInlineUnionArm,
    directRequiredMemberInlineGeneric,
    factoryRequiredMemberInlineGeneric,
    directRequiredMemberInlineEmptyIntersection,
    factoryRequiredMemberInlineEmptyIntersection,
    directIndexSignatureInterfaceTop,
    factoryIndexSignatureInterfaceTop,
    directIndexSignatureInterfaceNested,
    factoryIndexSignatureInterfaceNested,
    directIndexSignatureInterfaceOptionalProperty,
    factoryIndexSignatureInterfaceOptionalProperty,
    directIndexSignatureInterfaceUnionArm,
    factoryIndexSignatureInterfaceUnionArm,
    directIndexSignatureInterfaceGeneric,
    factoryIndexSignatureInterfaceGeneric,
    directIndexSignatureInterfaceEmptyIntersection,
    factoryIndexSignatureInterfaceEmptyIntersection,
    directIndexSignatureLiteralTop,
    factoryIndexSignatureLiteralTop,
    directIndexSignatureLiteralNested,
    factoryIndexSignatureLiteralNested,
    directIndexSignatureLiteralOptionalProperty,
    factoryIndexSignatureLiteralOptionalProperty,
    directIndexSignatureLiteralUnionArm,
    factoryIndexSignatureLiteralUnionArm,
    directIndexSignatureLiteralGeneric,
    factoryIndexSignatureLiteralGeneric,
    directIndexSignatureLiteralEmptyIntersection,
    factoryIndexSignatureLiteralEmptyIntersection,
    directIndexSignatureInlineTop,
    factoryIndexSignatureInlineTop,
    directIndexSignatureInlineNested,
    factoryIndexSignatureInlineNested,
    directIndexSignatureInlineOptionalProperty,
    factoryIndexSignatureInlineOptionalProperty,
    directIndexSignatureInlineUnionArm,
    factoryIndexSignatureInlineUnionArm,
    directIndexSignatureInlineGeneric,
    factoryIndexSignatureInlineGeneric,
    directIndexSignatureInlineEmptyIntersection,
    factoryIndexSignatureInlineEmptyIntersection,
  };
  const selectedMode = mode;
  const modules: any = { [mode]: mod };
  let groups = 0;
  let memberPairs = 0;
  let anchors = 0;
  let optionalRows = 0;
  const failures: string[] = [];
  // A missing export means the fixture and this runner disagree about the matrix.
  // Reporting it by name keeps that from surfacing as an unattributable TypeError
  // halfway through the run.
  const call: any = (mode: any, name: any, input: any) => {
    const validator: any = modules[mode][name];
    if (typeof validator !== "function") {
      failures.push("missing export " + mode + " " + name);
      return "MISSING";
    }
    return validator(input);
  };
  const callable = (value: any) => String(value);
  class Constructable {
    constructor(public value: any) {
      this.value = value;
    }
  }
  const methoded = Object.assign((value: any) => String(value), {
    method: () => undefined,
  });
  const labeled = Object.assign((value: any) => String(value), {
    label: "present",
  });
  const mislabeled = Object.assign((value: any) => String(value), {
    label: 123,
  });
  const indexed = Object.assign((value: any) => String(value), { extra: 1 });
  // This object supplies the Function-shaped and authored members checked by
  // the retained member-bearing structural path. Literal positive anchors keep
  // an always-false implementation from satisfying every spelling parity check;
  // they do not claim that this object implements a TypeScript call signature.
  const apparent: any = {
    apply: () => undefined,
    call: () => undefined,
    bind: () => undefined,
    toString: () => "",
    length: 0,
    name: "",
    prototype: {},
    arguments: null,
    caller: () => undefined,
    label: "present",
    method: () => undefined,
    extra: 1,
  };
  const shapes: any = [
    "PureCall",
    "PureConstruct",
    "Overload",
    "ConstructOverload",
    "CallAndConstruct",
    "Method",
    "MethodProperty",
    "OptionalMethod",
    "OptionalMethodProperty",
    "SymbolMember",
    "OptionalSymbolMember",
    "OptionalMember",
    "RequiredMember",
    "IndexSignature",
  ];
  const aliasedShapes: any = new Set(["PureCall", "PureConstruct"]);
  // Each pair differs only in whether its member is written as a method shorthand
  // or as a function-typed property. TypeScript calls them the same type, so every
  // validator built from either must answer identically.
  const memberSpellingPairs: any = [
    ["Method", "MethodProperty"],
    ["OptionalMethod", "OptionalMethodProperty"],
  ];
  const positions: any = [
    "Top",
    "Nested",
    "OptionalProperty",
    "UnionArm",
    "Generic",
    "EmptyIntersection",
  ];
  const values: any = [
    ["callable", callable],
    ["constructable", Constructable],
    ["methoded", methoded],
    ["labeled", labeled],
    ["mislabeled", mislabeled],
    ["indexed", indexed],
    ["apparent", apparent],
    ["placeholder", {}],
    ["dataOnly", { label: "present" }],
    ["badDataOnly", { label: 123 }],
    ["unionData", { kind: "data", value: 1 }],
    ["badUnionData", { kind: "data", value: "bad" }],
  ];
  const wrap: any = (position: any, value: any) =>
    position === "Nested" || position === "OptionalProperty"
      ? { fn: value }
      : position === "Generic"
        ? { payload: value }
        : value;
  for (const mode of [selectedMode]) {
    for (const position of positions) {
      for (const form of ["direct", "factory"]) {
        for (const [label, value] of values) {
          const input: any = wrap(position, value);
          for (const shape of shapes) {
            groups += 1;
            const spellings: any = ["Interface", "Literal", "Inline"];
            if (aliasedShapes.has(shape)) spellings.push("Alias");
            const answers: any = spellings.map((spelling: any) =>
              call(mode, form + shape + spelling + position, input),
            );
            for (let i: any = 1; i < answers.length; ++i) {
              if (answers[i] !== answers[0]) {
                failures.push(
                  "spelling " +
                    mode +
                    " " +
                    form +
                    shape +
                    position +
                    " " +
                    label +
                    ": " +
                    spellings[0] +
                    "=" +
                    answers[0] +
                    " " +
                    spellings[i] +
                    "=" +
                    answers[i],
                );
              }
            }
          }
          for (const [method, property] of memberSpellingPairs) {
            for (const spelling of ["Interface", "Literal", "Inline"]) {
              memberPairs += 1;
              const left: any = call(
                mode,
                form + method + spelling + position,
                input,
              );
              const right: any = call(
                mode,
                form + property + spelling + position,
                input,
              );
              if (left !== right) {
                failures.push(
                  "member " +
                    spelling +
                    " " +
                    mode +
                    " " +
                    form +
                    method +
                    "/" +
                    property +
                    position +
                    " " +
                    label +
                    ": method=" +
                    left +
                    " property=" +
                    right,
                );
              }
            }
          }
        }
      }
    }
  }
  // Parity cannot see a change that moves every spelling the same way, so these
  // anchors pin the answers themselves. A member-free callable is a function type,
  // which typia documents as a slot default options skip and functional options
  // require a real function for. A member-carrying callable keeps the structural
  // object shape #2250 merged and #2238 declares an explicit negative boundary:
  // its guard opens with a typeof "object" test, so a real function is rejected,
  // and it still requires the members it declares, so a bare {} is rejected too.
  const anchorRows: any = [
    ["default", "directPureCall", "Top", callable, true],
    ["functional", "directPureCall", "Top", callable, true],
    ["default", "directPureCall", "Top", {}, true],
    ["functional", "directPureCall", "Top", {}, false],
    ["default", "factoryPureCall", "Top", callable, true],
    ["functional", "factoryPureCall", "Top", {}, false],
    ["default", "directPureConstruct", "Top", Constructable, true],
    ["functional", "directPureConstruct", "Top", Constructable, true],
    ["default", "directPureConstruct", "Top", {}, true],
    ["functional", "directPureConstruct", "Top", {}, false],
    ["default", "directOverload", "Top", callable, true],
    ["functional", "directOverload", "Top", callable, true],
    ["functional", "directOverload", "Top", {}, false],
    ["default", "directConstructOverload", "Top", Constructable, true],
    ["functional", "directConstructOverload", "Top", {}, false],
    ["default", "directCallAndConstruct", "Top", callable, true],
    ["functional", "directCallAndConstruct", "Top", callable, true],
    ["functional", "directCallAndConstruct", "Top", {}, false],
    ["default", "directPureCall", "Nested", { fn: callable }, true],
    ["functional", "directPureCall", "Nested", { fn: callable }, true],
    ["functional", "directPureCall", "Nested", { fn: {} }, false],
    ["default", "directPureCall", "EmptyIntersection", callable, true],
    ["functional", "directPureCall", "EmptyIntersection", callable, true],
    ["functional", "directPureCall", "EmptyIntersection", {}, false],
    ["default", "directPureCall", "Generic", { payload: callable }, true],
    ["functional", "directPureCall", "Generic", { payload: {} }, false],
    ["default", "directPureCall", "UnionArm", callable, true],
    ["default", "directPureCall", "UnionArm", { kind: "data", value: 1 }, true],
    [
      "default",
      "directPureCall",
      "UnionArm",
      { kind: "data", value: "bad" },
      false,
    ],
    ["functional", "directPureCall", "UnionArm", callable, true],
    [
      "functional",
      "directPureCall",
      "UnionArm",
      { kind: "data", value: 1 },
      true,
    ],
    [
      "functional",
      "directPureCall",
      "UnionArm",
      { kind: "data", value: "bad" },
      false,
    ],
    ["default", "directRequiredMember", "Top", labeled, false],
    ["functional", "directRequiredMember", "Top", labeled, false],
    ["default", "directRequiredMember", "Top", {}, false],
    ["default", "directRequiredMember", "Top", apparent, true],
    ["functional", "directRequiredMember", "Top", apparent, true],
    ["default", "directIndexSignature", "Top", indexed, false],
    ["default", "directIndexSignature", "Top", apparent, true],
    ["default", "directMethod", "Top", methoded, false],
    ["default", "directMethod", "Top", apparent, true],
    ["default", "directMethodProperty", "Top", methoded, false],
    ["default", "directMethodProperty", "Top", apparent, true],
  ];
  for (const [mode, prefix, position, value, expected] of anchorRows) {
    if (mode !== selectedMode) continue;
    for (const spelling of ["Interface", "Literal", "Inline"]) {
      anchors += 1;
      const name: any = prefix + spelling + position;
      const actual: any = call(mode, name, value);
      if (actual !== expected) {
        failures.push(
          "anchor " +
            mode +
            " " +
            name +
            ": expected " +
            expected +
            " but got " +
            actual,
        );
      }
    }
  }
  // The optional data member is its own boundary: a callable shape whose only
  // member may be absent is the shape most likely to be mistaken for a member-free
  // one, so a fix that widened the signature-only rule too far would erase the
  // member and start accepting a bare function. Present-valid, omitted,
  // present-invalid, and data-only are the four states that distinguish "the
  // member is still checked" from "the member is gone", and the interface spelling
  // is the oracle #2250 merged for them.
  for (const [label, value] of [
    ["present-valid", labeled],
    ["omitted", callable],
    ["present-invalid", mislabeled],
    ["data-only", { label: "present" }],
  ]) {
    for (const mode of [selectedMode]) {
      optionalRows += 1;
      const oracle: any = call(mode, "directOptionalMemberInterfaceTop", value);
      for (const spelling of ["Literal", "Inline"]) {
        const actual: any = call(
          mode,
          "directOptionalMember" + spelling + "Top",
          value,
        );
        if (actual !== oracle) {
          failures.push(
            "optional member " +
              mode +
              " " +
              spelling +
              " " +
              label +
              ": expected the interface oracle " +
              oracle +
              " but got " +
              actual,
          );
        }
      }
      // A callable value that omits the optional member must not be accepted while
      // the declared member is still part of the type; if it were, the member had
      // been erased.
      if (label === "omitted" && oracle !== false) {
        failures.push(
          "optional member " +
            mode +
            " omitted: interface oracle accepted a bare function",
        );
      }
    }
  }
  if (failures.length !== 0)
    throw new Error("MISMATCHES:\n" + failures.join("\n"));
  if (
    groups !== 2016 ||
    memberPairs !== 864 ||
    optionalRows !== 4 ||
    anchors !== (mode === "functional" ? 60 : 69)
  )
    throw new Error(
      "incomplete callable spelling matrix " +
        [groups, memberPairs, anchors, optionalRows],
    );
};
