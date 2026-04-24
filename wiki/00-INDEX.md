# typia wiki

## 현재 기준

- 기본 컴파일 경로는 `@typescript/native-preview` + `@typia/ttsc` + `typia/lib/transform` 이다.
- `typia setup` 은 `@typescript/native-preview`, `@typia/ttsc`, `@typia/ttsx` 를 설치하고, legacy `ts-patch` 설정을 제거한다.
- `ttsc` 는 standalone compiler adapter / plugin host 다.
- `ttsx` 는 `ttsc` host 를 재사용하는 standalone runner 다.
- typia는 `ttsc` / `ttsx` 의 첫 consumer 다.
- typia 변환은 Go native backend 가 수행한다.
- `@typia/core` / `@typia/transform` TypeScript transformer 패키지는 현재 코드베이스에 없다.
- `typia/lib/transform` 은 legacy transformer 가 아니라 native plugin entry 다.

## 먼저 볼 문서

1. [08-tsgo-master-plan/00-README.md](08-tsgo-master-plan/00-README.md)
2. [02-architecture/00-README.md](02-architecture/00-README.md)
3. [03-packages/00-README.md](03-packages/00-README.md)
4. [06-feedback/05-ttsc-ttsx-follow-ups.md](06-feedback/05-ttsc-ttsx-follow-ups.md)
5. [10-ecosystem/00-README.md](10-ecosystem/00-README.md)

## 폴더

| 폴더 | 역할 |
| --- | --- |
| `01-philosophy/` | typia의 핵심 명제 |
| `02-architecture/` | 현재 구조 |
| `03-packages/` | 패키지별 책임 |
| `04-features/` | 기능별 정리 |
| `05-research/` | 외부 사실 자료 |
| `06-feedback/` | 현재 제약과 후속 과제 |
| `08-tsgo-master-plan/` | 현재 `ttsc` / `ttsx` 계약 |
| `09-audit/` | 측정과 감수 기록 |
| `10-ecosystem/` | downstream 영향 |
| `07-strategy/` | 보존용 과거 전략 문서 |
