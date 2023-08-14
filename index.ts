// RxJS v6+
import { ajax } from 'rxjs/ajax';

const githubUsrUrl = `https://api.github.com/error`;

const usrs = ajax({
  url: githubUsrUrl,
  method: 'GET',
  headers: {
    /*some headers*/
  },
  body: {
    /*in case you need a body*/
  },
});

const subscribe = usrs.subscribe(
  (res) => console.log(res),
  (err) => console.error(err)
);
