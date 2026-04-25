# website

위치: `website/`

## 역할

- typia.io 문서
- playground
- blog
- static export

## 현재 toolchain 문서 기준

setup 문서는 다음 current lane 을 설명해야 한다.

```bash
npx typia setup
# installs @typescript/native-preview, ttsc, ttsc
# writes compilerOptions.plugins += [{ transform: "typia/lib/transform" }]
# removes legacy ts-patch settings
```

## playground boundary

website playground 는 browser/static-hosting 제약이 있다. 현재 native host lane 과 완전히 같은 실행 환경으로 쓰지 않는다.

문서에서는 다음을 분리한다.

| lane | 의미 |
| --- | --- |
| native/default | `@typescript/native-preview` + `ttsc` + Go native backend |
| runner | `ttsc` |
| bundler | `@typia/unplugin` |
| browser playground | website compatibility lane |

## 유지할 것

- setup 문서와 실제 setup wizard 동작 동기화
- playground 를 native host parity 증거처럼 과장하지 않기
- browser lane 과 native lane 의 차이 명시
