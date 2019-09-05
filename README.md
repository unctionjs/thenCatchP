# @unction/thenCatchP

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> MapperFunctionType<A, B> => MapperFunctionType<C, B> => Promise<A> => Promise<D | B>

A port of the `Promise.prototype.then()` function, but with the extra catch argument.

Credit: @keithamus

``` javascript
thenCatchP(
  ([user, project]) => console.log(user, project)
)(
  (exception) => console.error(exception)
)(Promise.all([fetchUser, fetchProject]))
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/thenCatchP.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/thenCatchP.svg?maxAge=2592000&style=flat-square
