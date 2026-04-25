# 05. Integrated Transition

연도별 통합 계획은 현재 wiki 기준에서 제거한다.

## current dependency order

```
@typescript/native-preview
  -> ttsc
       -> typia
       -> ttsc
       -> @typia/unplugin
            -> downstream projects
```

## current transition rule

1. typia native backend parity 를 먼저 맞춘다.
2. `ttsc` plugin contract 를 좁고 안정적으로 유지한다.
3. `ttsc` runner semantics 를 검증한다.
4. nestia 같은 second consumer 로 generic boundary 를 검증한다.
5. agentica/autobe 는 typia public API parity 로 영향 범위를 확인한다.

## not current fact

- 특정 연도 릴리스
- 네 프로젝트 동시 릴리스
- downstream major version number
- Go 포팅 범위 확정치
