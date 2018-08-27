// 腾讯云 COS 的使用
import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {environment} from '../environments/environment';
const fs = require('fs');
const COS = require('cos-js-sdk-v5');

@Injectable()
export class TengxunyunService {
  engineStatus: Observable<boolean>;
  private observer: Observer<boolean>;
  urlObj = {
    urlString: '',
    name: ''
  };
  cos = new COS({
    AppId: environment.txyun.appId,
    SecretId: environment.txyun.secretId,
    SecretKey: environment.txyun.secretKey,
  });

  constructor () {
    this.engineStatus = new Observable<boolean>(observer => this.observer = observer).share();
  }

  guid () {
    const s4 = () =>
      Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }


  uploadImageForBase64(img: string, type, name) {
    const vm = this;
    const storeAs = `${environment.txyun.fileName}avatar/${new Date().getTime()}-${this.guid()}.${type}`;
    const dataURLtoFile: Function = (dataurl, filename) => {
      const arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, {type: mime});
    };
    const file = dataURLtoFile(img, type);
    this.cos.sliceUploadFile({
      Bucket: environment.txyun.bucket,
      Region: environment.txyun.region,
      Key: storeAs,
      Body: file
    }, function (err, data) {
      if (err) {
        console.error(err);
        vm.observer.next(false);
      } else {
        vm.urlObj.urlString = `${environment.txyun.urlStr}` + data.Key;
        vm.urlObj.name = name;
        vm.observer.next(true);
      }
    });
  }

  getUrlByFile() {
    return this.urlObj;
  }

  uploadFile(file, type, name) {
    const vm = this;
    const storeAs = `${environment.txyun.fileName}${type}/${new Date().getTime()}-${this.guid()}.${type}`;
    this.cos.sliceUploadFile({
      Bucket: environment.txyun.bucket,
      Region: environment.txyun.region,
      Key: storeAs,
      Body: file
    }, function (err, data) {
      if (err) {
        console.error(err);
        vm.observer.next(false);
      } else {
        vm.urlObj.urlString = `${environment.txyun.urlStr}` + data.Key;
        vm.urlObj.name = name;
        vm.observer.next(true);
      }
    });
  }
}
