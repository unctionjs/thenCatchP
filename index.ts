export default function thenCatchP (resolution) {
  return function thenCatchPResolution (rejection) {
    return function thenCatchPResolutionRejection (promise) {
      return promise.then(resolution, rejection);
    };
  };
}
