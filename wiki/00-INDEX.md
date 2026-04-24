# typia wiki

## 먼저 볼 문서

1. [08-tsgo-master-plan/00-README.md](08-tsgo-master-plan/00-README.md)
2. [08-tsgo-master-plan/02-products.md](08-tsgo-master-plan/02-products.md)
3. [08-tsgo-master-plan/03-plugin-contract.md](08-tsgo-master-plan/03-plugin-contract.md)
4. [08-tsgo-master-plan/04-typia-consumer.md](08-tsgo-master-plan/04-typia-consumer.md)
5. [08-tsgo-master-plan/08-current-spike.md](08-tsgo-master-plan/08-current-spike.md)
6. [10-ecosystem/00-README.md](10-ecosystem/00-README.md)
7. [09-audit/10-native-core-transform-port-review.md](09-audit/10-native-core-transform-port-review.md)

## 현재 기준

- `ttsc` 는 standalone compiler adapter / plugin host 다.
- `ttsx` 는 standalone runner 다.
- typia는 `ttsc` / `ttsx` 위에 올라가는 첫 consumer 다.
- preview 기본 설치 계약은 `@typescript/native-preview` + `@typia/ttsc` 다.
- stable 기본 설치 계약은 `typescript@7` + `@typia/ttsc` 가 목표다.
- `@typia/ttsx` 는 optional runner 다.
- `@typia/core`, `@typia/transform` TypeScript legacy transformer 표면은 제거되었다.
- `typia/lib/transform` 은 현재 native plugin entry 다.
- 현재 native 구현은 `packages/core/native` 와 `packages/transform/native` 에 남아 있다.

## 폴더

| 폴더                   | 역할                            |
| ---------------------- | ------------------------------- |
| `01-philosophy/`       | typia의 핵심 명제               |
| `02-architecture/`     | 현재 구조                       |
| `03-packages/`         | 패키지별 책임                   |
| `04-features/`         | 기능별 정리                     |
| `05-research/`         | 외부 사실 자료                  |
| `06-feedback/`         | 개선 과제                       |
| `08-tsgo-master-plan/` | 현재 전환 계획                  |
| `09-audit/`            | 측정과 감수                     |
| `10-ecosystem/`        | nestia · agentica · autobe 연결 |
| `07-strategy/`         | 보존용 참고 문서                |
