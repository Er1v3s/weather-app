import getWeather from "./requestAPI";

const APIresponse = getWeather();

const fetchingData = new Promise((resolve, reject) => {
  resolve(APIresponse);
  reject(
    new Error(
      "Something went wrong, check your entered data and try one more time "
    )
  );
});

export default fetchingData;
