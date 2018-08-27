// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  txyun: {
    appId: 1257240793,
    secretId: 'AKID54sUwEoG0Yu55tTv9B5oLjy3vb4LqN6c',
    secretKey: 'Vpy408E8qkYDj3ANTQBjzRq6B4lLly42',
    bucket: 'lixing-1257240793',
    region: ['ap-beijing'],
    fileName: '图片',
    urlStr: 'https://lixing-1257240793.cos.ap-beijing.myqcloud.com',
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
