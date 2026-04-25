# 07. Open Questions

닫힌 질문:

- `ttsc` 는 standalone host 다.
- `ttsx` 는 standalone runner 다.
- typia는 첫 consumer 다.
- TypeScript v7 lane 에서 legacy transformer object 호환을 목표로 두지 않는다.
- 현재 setup 은 `@typescript/native-preview`, `ttsc`, `ttsc` 를 설치한다.

열린 질문:

- native plugin 여러 개를 어떻게 compose 할지
- diagnostics / assets / phase hook 을 어디까지 public API 로 고정할지
- `ttsx` CJS/ESM 실행 차이를 어떻게 줄일지
- `typescript@7` stable lane 전환 시 setup 기본값을 어떻게 바꿀지
- nestia 같은 second consumer 가 공유할 core API 를 어떤 패키지로 제공할지
