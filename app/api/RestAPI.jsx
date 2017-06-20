//ajax request that returns a promise
const RESTCall = ({method, url, body, requestHeaders, headersToReturn}) => {
  return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {
              const res = {
                body: this.responseText,
                headers: null
              };
              resolve(res);
            } else {
              reject();
            }
         }
      };
      //reject on any error
      xhr.onerror = () => {reject()};
      xhr.open(method, url, true);
      xhr.send(body);
  });
}

export const get_hotels = () => RESTCall({
  method: "GET",
  url: "/hotels",
  body: undefined,
  requestHeaders: undefined,
  headersToReturn: undefined
});
